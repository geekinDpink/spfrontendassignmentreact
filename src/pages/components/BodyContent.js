import React from 'react';
import Menu from './MenuItem';
import Col from 'react-bootstrap/Col'


export default function BodyContent({menuItems,onAddToCart}) {
    return (
        <Col md={8}>
            {menuItems.map(menuItem => (
                <Menu menuProps={menuItem} onAddToCart={onAddToCart}/>
            ))}
        </Col>
    );
}


/* Testing dynamically the menu item 
export default function BodyContent({menuItems}) {
    return (
        <div>
            {menuItems.map(menuItem => (
                <li>{menuItem.name}</li>
            ))}
        </div>
    );
}
*/
