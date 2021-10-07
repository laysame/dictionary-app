import React, {useState} from "react";
import axios from "axios";
import {Button, Col, Form, Row } from 'react-bootstrap';
import Loader from "react-loader-spinner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dictionary.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SearchEngine from "./SearchEngine";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState({ready: false,});

    function handleResponse(response) {
        console.log(response.data[0])
        setResults({
            ready: true,
            responsePath: response.data[0],
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

if (results.ready) {
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
                <SearchEngine apiData ={results.responsePath} />
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