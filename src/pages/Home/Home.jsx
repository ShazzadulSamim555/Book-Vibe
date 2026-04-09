import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;