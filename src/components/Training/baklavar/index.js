import React from 'react';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import SubMenuTraining from '../SubMenuTraining';
import BakalavrHotolbor from './baclavar';
const Baklavar = () => {
  return (
    <div>
      <Header />
      <SubMenuTraining/>
      <BakalavrHotolbor/>
      <Footer />
    </div>
  );
};

export default Baklavar;
