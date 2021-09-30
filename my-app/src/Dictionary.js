import React, { useState} from "react";
import { Button, Col, Form, Row, FormControl, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} meaning`);
    }

    function changeSubmittedWord(event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <Row className="align-items-center">
            <Form onSubmit={handleSubmit}>
                    <Col className="col-12" xs="auto">
                        <input type="search" placeholder="Look up for a word..." className="m-2 w-25 Dictionary-form"
                        onChange={changeSubmittedWord}/>
                        <Button type="submit" className=" m-3 Dictionary-btn">Search</Button>
                    </Col>
            </Form>
                </Row>
        </div>
    )
}