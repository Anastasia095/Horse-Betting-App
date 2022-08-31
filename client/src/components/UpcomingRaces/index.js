import React from 'react';
import { Link } from 'react-router-dom';
const axios = require("axios");


//This API works, just need to figure our how to pass the data over to the UpcomingEvents for rendering
// const options = {
//     method: 'GET',
//     url: 'https://horse-racing-usa.p.rapidapi.com/racecards',
//     params: { date: '2022-08-31' },
//     headers: {
//         'X-RapidAPI-Key': 'cb4bee5a1amsh26c0be09d81f012p19f5bdjsn7964190293ea',
//         'X-RapidAPI-Host': 'horse-racing-usa.p.rapidapi.com'
//     }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data[0].course);
// }).catch(function (error) {
//     console.error(error);
// });

const UpcomingEvents = () => {


    return (
        <div>
            {/* <h3 className="text-primary">{title}</h3> */}
            <div className="flex-row justify-space-between my-4">
                {/* {profiles &&
          profiles.map((profile) => (
            <div key={profile._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {profile.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {profile.skills ? profile.skills.length : 0}{' '}
                    endorsed skill
                    {profile.skills && profile.skills.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/profiles/${profile._id}`}
                >
                  View and endorse their skills.
                </Link>
              </div>
            </div>
          ))} */}
            </div>
        </div>
    );
};

export default UpcomingEvents;
