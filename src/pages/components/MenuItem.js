import React from 'react';
import Card from 'react-bootstrap/Card';



//https://create-react-app.dev/docs/using-the-public-folder/
//https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

export default function Menu({ menuProps, onAddToCart }) {

    return (
        <Card style={{ width:'15rem',float:"left", margin:"10px" }}>
            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + menuProps.image} />
            <Card.Title style={{height:'20px'}}>{menuProps.name}</Card.Title>
            <Card.Body>
            <Card.Text>${menuProps.price}</Card.Text>
            <button onClick={() => onAddToCart(menuProps)}>Add to Cart</button>
            </Card.Body>
        </Card>
    );
}


/*
    return (
        <div>
            <h4>{menuProps.name}</h4>
            <div>${menuProps.price}</div>
            <img src={process.env.PUBLIC_URL+menuProps.image}></img>
            <button onClick={()=>onAddToCart(menuProps)}>Add to Cart</button>
        </div>
    );
*/