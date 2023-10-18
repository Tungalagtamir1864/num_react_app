import React from 'react';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import Table from './fileOruulah';
import FileHeader from './fileHeater';
const FileView = () => {
  return (
    <div>
      <Header/>
      <FileHeader />
      <Table/>
      <Footer />
      
    </div>
  );
};

export default FileView;
