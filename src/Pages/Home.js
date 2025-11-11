import React from 'react';
import Header from '../Components/Header';
import Blogs from '../Components/Blog';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
