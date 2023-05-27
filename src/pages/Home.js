import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
    return (

        <Container>
            <h2>Home</h2>

            <Row className="justify-content-center">
                <h4>Welcome to Bakudo Sushi House</h4>
            </Row>
            <Row className="mt-1">
                <Col sm={5} md={5}>
                    <img src="photos/front.jpg" alt="Store Front">
                    </img>
                </Col>
                <Col sm={7} md={7}>
                    <div>
                        Bakudo Sushi House, a 50-seater dining house, that
                        provides guests a private and intimate setting designed to invoke tradition and the four seasons
                        through the use of centuries-old Noren (room dividers), replica of traditional artifact such as the sword of kusanagi
                        and fine Japanese earthen wall plastering, with every corner evoking stories and settings of Traditional Japanese folklore.
                    </div>
                </Col>
            </Row>


            <Row className="mt-5">
                <h4>Check out our latest promotion/happening!</h4>
            </Row>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="photos/carou1.jpg"
                        alt="Wide Variety"

                    />
                    <Carousel.Caption>
                        <h3>Bring you a wide variety of delicacy</h3>
                        <p>Be prepared to be spoilt for choices</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="photos/carou2.jpg"
                        alt="Sashimi promo"

                    />

                    <Carousel.Caption>
                        <h3>Fresh Salmon Sashimi</h3>
                        <p>Order Now for 10% discount</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="photos/carou3.jpg"
                        alt="Anpan fish biscuits"
                    />

                    <Carousel.Caption>
                        <h3>Good News! We heard your request </h3>
                        <p>And would be bringing our new menu item soon</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>

    );
}