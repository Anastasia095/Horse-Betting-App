import React from 'react';
import Header from '../components/Header';
import Tournament from '../components/Tournament';
import Footer from '../components/Footer';
import '../App.css'
const Tournaments = () => {
  return (
    <div>
      <Header />
      <Tournament />
      <Footer />
    </div>
  );
};

export default Tournaments;