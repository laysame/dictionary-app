import React, {useState} from "react";
import axios from "axios";
import {Button, Col, Form, Row, Card, } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import "./Dictionary.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
library.add(faVolumeUp)


export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [dictionary, setDictionary] = useState({ready: false,});

    function handleResponse(response) {
        console.log(response.data[0])
        setDictionary({
            ready: true,
            word: response.data[0].word,
            text: response.data[0].phonetic,
        })
    }

    function apiSearch(){
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl)
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        apiSearch();
    }

    function changeSubmittedWord(event) {
        setKeyword(event.target.value);
    }

if (dictionary.ready) {
    return (
        <div className="Dictionary">
            <Row className="align-items-center">
                <Col className="col-12" xs="auto">
                    <Form onSubmit={handleSubmit}>
                        <input type="search" placeholder="Look up for a word..." className="m-2 Dictionary-form"
                               onChange={changeSubmittedWord}/>
                        <Button type="submit" className=" m-3 Dictionary-btn">Search</Button>
                        <p className="ps-0">e.g music, sunset, code...</p>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 mt-3">
                    <Card className="Dictionary-card">
                        <Card.Body>
                            <div className="Dictionary-body ms-2">
                                <h1>{dictionary.word} <a href="#"><FontAwesomeIcon icon={faVolumeUp} /></a></h1>
                                <h2>{dictionary.text}</h2>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
} else {
    apiSearch();
    return (
        <Loader
            type="TailSpin"
            color="#546b33"
            height={100}
            width={100}
            timeout={6000} 
        />
    )
}

}