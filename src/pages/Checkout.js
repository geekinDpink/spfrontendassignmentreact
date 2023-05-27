import React, { useState } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert'

export default function Checkout() {


    var [myAddress, setAddress] = useState([]);
    var [myPostalCode, setPostalCode] = useState([]);
    var [showAlert, setShow] = useState(false);


    var handleOnChange = (e) => {
        //const {postalCodeField, value} = e.target;
        //setPostalCode({...myPostalCode, [postalCodeField]:value})
        setPostalCode(myPostalCode = e.target.value)
    }

    //Get Address based on postal code
    async function getAddress(postalCode) {

        var genURL = "https://developers.onemap.sg/commonapi/search?searchVal=" + postalCode + "&returnGeom=N&getAddrDetails=Y&pageNum=1";
        var response = await fetch(genURL);
        var data = await response.json();
        var address = data.results[0].ADDRESS;

        setAddress(myAddress = address);

        /* From oneMap Development guide
        $.ajax({
        url: genURL,
        success: function(result){
            //Set result to a variable for writing
            var TrueResult = JSON.stringify(result.ADDRESS);
            }});

            return (TrueResult);
        }
        */
        console.log(myAddress);
        return address;
    }



    return (
        <Container>
            <Row>
                <h2>Delivery Details</h2>
            </Row>
            <Row>
                <Alert show={showAlert} variant="info">
                    <Alert.Heading>Your order is confirmed</Alert.Heading>
                    <p>
                        Your Order Reference No. is REF123456B
                    </p>
                    <Button onClick={() => setShow(showAlert=false)}>Ok</Button>
                </Alert>
            </Row>
            <Row>
                <p>Thank you for placing your order. To proceed, we would require you to provide your delivery details in the form below.<br></br>
                In-house delivery only, to ensure freshness and top quality.</p>
            </Row>
            <Row>
                <Container>
                    <Form>
                        <Form.Group as={Row} controlId="PostalCode">
                            <Form.Label column sm={2}>
                                Postal Code
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="number" placeholder="Postal Code" name="postalCodeField" onChange={handleOnChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button onClick={() => getAddress(myPostalCode)}>Get Address</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="Address">
                            <Form.Label column md={2}>
                                Address
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control type="text" name="Address" placeholder="Street Name" value={myAddress} />
                                Search function courtesy of API from SLA's Onemap.gov.sg
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="Unit">
                            <Form.Label column sm={2} >
                                Unit No.
                            </Form.Label>
                            <Col xs={4} sm={2}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>#</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="number" placeholder="Level" name="floor" />
                                </InputGroup>
                            </Col>

                            <Col xs={4} sm={2}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>-</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="number" placeholder="Unit" name="unit" />
                                </InputGroup>
                            </Col>
                        </Form.Group>



                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Delivery Timing
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="8am to 10am"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="12pm to 2pm"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="6pm to 8pm"
                                        name="formHorizontalRadios"
                                        Button id="formHorizontalRadios3"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>

                        <Form.Group as={Row} controlId="Comments">
                            <Form.Label column md={2}>
                                Comment
                            </Form.Label>
                            <Col md={10}>
                                <Form.Control as="textarea" row={3} name="Comments" placeholder="Comments/Additional Instruction" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Button onClick={() => setShow(showAlert=true)}>Ok</Button>
                            </Col>
                        </Form.Group>

                    </Form>
                </Container>
            </Row>

        </Container>
    );
}