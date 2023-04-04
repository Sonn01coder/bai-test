import React from 'react';
import './nav.css'

const list = [
    "Home",
    "Services",
    "News",
    "Blog",
    "Contact" 
]

function Nav(props) {
    return (
        <section className='nav'>
            {
                list.map((item, index) => (
                    <div key={index} className='nav_item'>
                        {item}
                    </div>
                ))
            }
        </section>
    );
}

export default Nav;