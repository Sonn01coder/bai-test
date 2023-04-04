import React from 'react';
import './content.css'
import logo from '../../assest/image/logo.png'
import img1 from '../../assest/image/img1.png'
import img2 from '../../assest/image/img2.png'
import img3 from '../../assest/image/img3.png'
import Item from './item/Item';

function Content(props) {
    return (
        <>
            <div className='content'>
                <div className='content_container'> 
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className='intro'>
                        <p className='intro_title'>Lorem ipsum dolor sit asmet?</p>
                        <p className='intro_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
                    </div>
                    
                    <div className='content_list'>
                        <Item img={img1}/>
                        <Item img={img2}/>
                        <Item img={img3}/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                Copyright © 2021
            </div>
            
        </>
    );
}

export default Content;