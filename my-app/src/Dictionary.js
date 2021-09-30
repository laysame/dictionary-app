import React, { useState} from "react";
import axios from "axios";
import { Button, Col, Form, Row, FormControl, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
console.log(apiUrl)
        axios.get(apiUrl).then(handleResponse);
    }

    function changeSubmittedWord(event){
        setKeyword(event.target.value);
    }



    return (
        <div className="Dictionary">
            <Row className="align-items-center">
            <Form onSubmit={handleSubmit}>
                    <Col className="col-12" xs="auto">
                        <input type="search" placeholder="Look up for a word..." className="m-2 Dictionary-form"
                        onChange={changeSubmittedWord}/>
                        <Button type="submit" className=" m-3 Dictionary-btn">Search</Button>
                    </Col>
            </Form>
                </Row>
        </div>
    )
}