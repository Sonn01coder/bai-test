import React from 'react';
import './content.css'
import logo from '../../assest/image/logo.png'

function Content(props) {
    return (
        <div className='content'> 
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>

            <div className='intro'>
                <p className='intro_title'>Lorem ipsum dolor sit asmet?</p>
                <p className='intro_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            
            <div></div>
        </div>
    );
}

export default Content;