import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';


export default function About() {
    return (
        <Container>
            <h2>About Us</h2>

            <Row className="mt-3 justify-content-center">
                <h4>OUR MISSION</h4>
            </Row>

            <Row className="justify-content-center">
                <div>To deliver quality and authentic Japanese cruisine in a traditional non-pretentious environment</div>
            </Row>
            <Row className="justify-content-center mt-2">
            <img src="./photos/aboutus.jpg" alt="About us"></img>
            </Row>

            <Row className="mt-5">
                <h4>OUR STORY</h4>
            </Row>
            <Row>
                <Col sm={4} md={4}>
                    <img src="./photos/chef.jpg" alt="Owner"></img>
                </Col>
                <Col sm={8} md={8}>
                    <p>It all started with Chef Glenn San under apprenticeship of his sushi master, Master Chef Nakata, in Tokyo,
                        rising to become the executive chef at several fine-dining and Michelin-starred sushi-yas
                        before deciding to make his maiden foray as a Master Chef through the opening of Bakudo Sushi House.
                    </p>
                    <p>It all started with Chef Glenn San under apprenticeship of his sushi master, Master Chef Nakata, in Tokyo,
                        rising to become the executive chef at several fine-dining and Michelin-starred sushi-yas
                        before deciding to make his maiden foray as a Master Chef through the opening of Bakudo Sushi House.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <h4>INGREDIENTS</h4>
            </Row>
            <Row>

                <Col sm={8} md={8}>
                <p>
                    Master Chef Glenn San’s focus on a authentic, traditional and cosy dining experience
                    could be reflected from the choice of premium ingredients, preparation and personal touches.
                </p>
                <div>
                    <ul>
                        <li>Fresh and wild caught seafood from Tokyo seafood market.</li>
                        <li>Special A-grade Osaka-hime organic rice from a reowned family farm in Osaka prefecture</li>
                        <li>Organic premium vinegar from a traditional brewery in Nigata</li>
                        <li>Vegetables and wasabi from fertilised by mineral rich Mount Fuji volcanic ashes</li>
                    </ul>
                </div>
                </Col>

                <Col sm={4} md={4}>
                <img src="./photos/seafoodMarket.jpg" alt="Market"></img>
                </Col>
            </Row>


        </Container>
    );
}