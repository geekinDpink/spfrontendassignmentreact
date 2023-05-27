import React from 'react';
import Header from "./components/Header";
import BodyContent from "./components/BodyContent";
import Cart from "./components/Cart";
//import Menu from "./data/menu";
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const data = {
    shashimis: [
        {
            id: '1',
            name: 'Hamachi (Yellowtail) Sashimi ',
            price: '1.50',
            image: '/photos/yellowtail.jpg',
        },

        {
            id: '2',
            name: 'Salmon Sashimi',
            price: '2.00',
            image: '/photos/salmon.jpg',
        },

        {
            id: '3',
            name: 'Maguro (Tuna) Sashimi',
            price: '2.50',
            image: '/photos/tuna.jpg',
        },
                
        {
            id: '4',
            name: 'Kajiki (Swordfish Belly) Sashimi',
            price: '3.00',
            image: '/photos/swordfish.jpg',
        },

        {
            id: '5',
            name: 'Ikura Salmon Roe',
            price: '3.50',
            image: '/photos/roe.jpg',
        },
    ]
}


export default function Order() {

    //Failed attempts to destructure from file
    //const {sushi} = Menu.data;
    //const {menuitems} = Menu

    const [cartItems, setCartItems] = useState([]);

    //Add to Cart function, which check if item exist in shopping cart 
    //if item exist, increase qty by one
    const onAddToCart = (item) => {
        const exist = cartItems.find((element) => element.id === item.id);
        if (exist) {
            setCartItems(
                cartItems.map((element) =>
                    element.id === item.id ? { ...exist, qty: exist.qty + 1 } : element
                )
            );
        }
        else {
            setCartItems([...cartItems, { ...item, qty: 1 }]);
        }
    };

    const onRemoveFromCart = (item) => {
    const exist = cartItems.find((element) => element.id === item.id);
    if (exist.qty > 1) {
        setCartItems
        (
            cartItems.map((element) =>
                element.id === item.id ? { ...exist, qty: exist.qty - 1 } : element
            )
        );}
        else {
            setCartItems(cartItems.filter((element) => element.id !== item.id));
        }
    };
    

    return (
        <Container>
            <Row><Header cartItems={cartItems}/></Row>
            <Row>
                <BodyContent onAddToCart={onAddToCart} menuItems={data.shashimis} />
                <Cart onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} cartItems={cartItems} />
            </Row>
        </Container>
    );
}

/*
    return (
        <>
            <Header cartItems={cartItems}/>
            <div className="flexrow">
                <BodyContent onAddToCart={onAddToCart} menuItems={data.shashimis} />
                <Cart onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} cartItems={cartItems} />
            </div>
        </>
    );
*/

/*test with list that contain list of object. To test putting in separate file
const data = {
    fish:[
        {
            id:'1',
            name:'Hamachi (Yellowtail) Sashimi ',
            price: '$1.50',
            image: 'chicken',
        },

        {
            id:'2',
            name:'Salmon Sashimi',
            price: '$2.00',
            image: 'beef',
        },

        {
            id:'3',
            name:'Maguro (Tuna) Sashimi',
            price: '$2.50',
            image: 'salmon',
        },
    ]
}
*/

/* test with list of objects
const data = [
        {
            id:'1',
            name:'Hamachi (Yellowtail) Sashimi ',
            price: '$1.50',
            image: 'chicken',
        },

        {
            id:'2',
            name:'Salmon Sashimi',
            price: '$2.00',
            image: 'beef',
        },

        {
            id:'3',
            name:'Maguro (Tuna) Sashimi',
            price: '$2.50',
            image: 'salmon',
        },
    ];

*/