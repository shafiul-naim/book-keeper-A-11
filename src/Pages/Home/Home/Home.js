import React from 'react';
import Books from '../../Books/Books';
import Inquiry from '../../Inquiry/Inquiry';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Books></Books>
            <Inquiry></Inquiry>
        </div>
    );
};

export default Home;