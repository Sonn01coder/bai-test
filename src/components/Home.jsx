import React from 'react';
import Content from './content/Content';
import Nav from './nav/Nav';
import "./home.css"
import { FiMenu } from 'react-icons/fi';

function Home(props) {

    return (
        <section className='home'>
            <div className='home_nav'>
                <Nav />
            </div>
            <div className='home_content'>
                <Content />
            </div>
            <div className='menu'>
                <FiMenu/>
            </div>
        </section>
    );
}

export default Home;