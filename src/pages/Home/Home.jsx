import React from 'react';
import Gallery from '../../Components/Home/Gallery/Gallery';
import SearchBar from '../../Components/Home/SearchBar/SearchBar';
import Footer from '../../Components/shared/Footer/Footer';
import Header from '../../Components/shared/Header/Header';



const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <Gallery />
            <Footer />  
        </>
    );
};

export default Home;