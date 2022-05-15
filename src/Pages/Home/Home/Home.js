import React from 'react';
import Inquiry from '../../Inquiry/Inquiry';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <Inquiry></Inquiry>
        </div>
    );
};

export default Home;