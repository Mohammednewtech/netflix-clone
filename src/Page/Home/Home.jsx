import React from 'react';
import Header from '../../Component/Header/Header.jsx';  
import Footer from '../../Component/Footer/Footer.jsx';  
 import Banner from '../../Component/Banner/Banner.jsx';
import RowList from '../../Component/RowList/RowList'
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default Home;

// api from the movie db '03d4b9818cbbadb32357e5f1b1a6fbbd'