import React from 'react';
import Header from './Header/Header';
import Hero from './Home/index';
import Footer from './Footer/Footer';
import Intro from '../About/Introduction';
import Statistic from '../About/statistic';
import Card from './card';
import HomeNews from './HomeNews';
import Zaag from './zaag';
import Zarlal from './HomeZarlal';
import NewPost from '../Post/PostZarlal/NewPost';
const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Intro/>
      <Card/>
      <Statistic/>
      <Zaag/>
      <HomeNews/>
      <Zaag/>
      <Zarlal/>
      <Footer />   
    </div>
  );
};

export default Home;
