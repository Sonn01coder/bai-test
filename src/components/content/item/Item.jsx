import React from 'react';
import "./item.css"

const data = {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
}

function Item({img}) {
    return (
        <div className='item'>
            <div className='item_title'>{data.title}</div>
            <div className='item_wrapper'>
                <img src={img} alt="img" />
                <p>{data.text}</p>
            </div>
        </div>
    );
}

export default Item;