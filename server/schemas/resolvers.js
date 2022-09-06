const { AuthenticationError } = require('apollo-server-express');
const { Profile, Races, Horses, Bets, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('pk_test_51LeOcxHKuC9rfCQDnjk3AtrdM8uJa5Aiqh0IdrArpPTgskuQgPH26o3jB5amJFHRiV7rtyzhSnWUsPgqmvnsQVXD000srH70Al');

const resolvers = {
  Query: {
    bets: async (parent, { horse }) => {
      const params = {};

      if (horse) {
        params.horse = {
          $regex: horse
        };
      }

      return await Bets.find(params);
    },
    bet: async (parent, { _id }) => {
      return await Bets.findById(_id);
    },
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    races: async () => {
      const racesData = await Races.find()
      return racesData
    },
    racesToday: async (parent, args, context) => {
      const racesTodayData = await Races.find({ date: { $regex: '.*' + args.date + '.*' } }).exec();
      return racesTodayData
    },
    horses: async (parent, args, context) => {
      const horsesData = await Horses.find({ id_race: args.id_race }).exec();
      return horsesData
    },
    checkout: async (parent, args, context) => {
      const bet = new Bet({ products: args.products });

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },

  Mutation: {
    addBets: async (root, args, context) => {
      console.log(args);
      const newBet = new Bets({ user: context.user._id, horse: args.horse, price: args.price });

      await newBet.save();
      return newBet;
    },
    addOrder: async (parent, { bets }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ bets });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    addHorses: async (root, args) => {

      const newHorsesData = new Horses({ horse: args.horse, id_horse: args.id_horse, jockey: args.jockey, trainer: args.trainer, age: args.age, weight: args.weight, number: args.number, form: args.form, position: args.position, distance_beaten: args.distance_beaten, sp: args.sp, id_race: args.id_race })

      await newHorsesData.save();

      return newHorsesData;
    },
    addRaces: async (root, args) => {

      const newRaceData = new Races({ age: args.age, canceled: args.canceled, course: args.course, date: args.date, distance: args.distance, finished: args.finished, id_race: args.id_race })

      await newRaceData.save();

      return newRaceData;
    },
    addProfile: async (parent, { name, email, password, birthdate }) => {
      const profile = await Profile.create({ name, email, password, birthdate });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Add a third argument to the resolver to access data in our `context`
    addSkill: async (parent, { profileId, skill }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: profileId },
          {
            $addToSet: { skills: skill },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removeSkill: async (parent, { skill }, context) => {
      if (context.user) {
        return Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { skills: skill } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
