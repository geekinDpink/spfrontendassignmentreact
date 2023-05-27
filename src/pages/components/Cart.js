import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';


export default function Cart(props) {

    let history = useHistory();

    const { cartItems, onAddToCart, onRemoveFromCart } = props;
    const subTotalPrice = cartItems.reduce((accumulator, currentValue)=> accumulator + currentValue.price*currentValue.qty,0);
    const gst = subTotalPrice*0.07;
    const serviceCharge = subTotalPrice*0.1;
    const total = subTotalPrice+gst+serviceCharge


    return (
        <Col md={4} className="cartBox">
            <Row>
                <h4>Your Cart</h4>
            </Row>
            <Row>
                <div>
                    {cartItems.length === 0 && <div>No item in cart yet</div>}
                </div>
            </Row>
            <Row>
                {cartItems.map((myItem) => (
                    <Container className="mb-3 cartItem">
                        <div key={myItem.id}>
                            <Row>
                                <div><b>Item: </b> {myItem.name}</div>
                            </Row>
                            <Row>
                                <div><b>Price: </b> {myItem.price}</div>
                            </Row>
                            <Row sm={12}>
                                <Col xs={4} sm={4}>
                                    <button onClick={() => onRemoveFromCart(myItem)} className="remove">-</button>
                                </Col>
                                <Col xs={4} sm={4}>Qty:{myItem.qty}</Col>
                                <Col xs={4} sm={4}>
                                    <button onClick={() => onAddToCart(myItem)} className="add">+</button>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                ))}
            </Row>
            <Row className="mt-5">
               <div><b>Sub-total: </b>${subTotalPrice.toFixed(2)}</div>
            </Row>
            <Row>
                   <div><b>GST(7%): </b> ${gst.toFixed(2)}</div>
            </Row>
            <Row>
                    <div><b>Service Charge(10%): </b> ${serviceCharge.toFixed(2)}</div>
            </Row>
            <Row>
                    <div><b>Total: </b> ${total.toFixed(2)}</div>
            </Row>
            <Row>
                <button style={{ margin: "20px" }} onClick={()=>history.push("/checkout")}>Checkout</button>
            </Row>
        </Col>
    );
}

/*
{cartItems.map((cartitem)=>(
    <div key={cartItem.id} className="row">
        <div>{cartItem.name}</div>
    </div>
))}

*/