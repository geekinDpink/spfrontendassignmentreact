import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';


export default function Footer() {
    return (
        <Container className="mt-5">
            <footer>
                <Row>
                    <Col className={4}>
                        <b>Main Outlet</b>
                        <p>
                            10 Orchard Drive <br></br>
                            The Hive, #02-05 <br></br>
                            Singapore 123456<br></br>
                        </p>
                        <b>New Outlet</b>
                        <p>
                            West Gate <br></br>
                            3 Gateway Dr, #02-90 <br></br>
                            Singapore 608532 <br></br>
                        </p>
                    </Col>

                    <Col className={4}>
                        <b>We are open on:</b>
                        <p>
                            Monday - Friday<br></br>
                            11:30am - 2:00pm<br></br>
                            6:30pm - 10:00pm<br></br>
                        </p>
                        <p>
                            Saturday<br></br>
                            12:30am - 2:30pm<br></br>
                            7:30pm - 11:30pm<br></br>
                        </p>
                    </Col>

                    <Col className={4}>
                    <ul>
                        <li><a href="../Home.js">Contact Us</a></li>
                        <li><a href="../Home.js">Career with us</a></li>
                        <li><a href="../Home.js">Direction</a></li>
                    </ul>
                    <div>
                        Follow us on:
                    </div>
                    <img src="photos/facebook.jpg" className="mr-2"></img>
                    <img src="photos/twitter.jpg" className="mr-2 ml-2"></img>
                    <img src="photos/instagram.png"></img>
                    </Col>
                </Row>
            </footer>
        </Container>

    );
}