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
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setResults({
            ready: true,
            responsePath: response.data[0],
        })
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function apiSearch(){
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl)
        axios.get(apiUrl).then(handleResponse);

        const pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        const pexelApiKey = "563492ad6f9170000100000175945afaea304e04b4a437786785264f";
        const headers = { Authorization: `Bearer ${pexelApiKey}`};
        axios.get(pexelApiUrl, {headers: headers}).then(handlePexelsResponse);
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
            <Row>
                <Col className="col-12">
                    <section className="ms-3">
                        <Form onSubmit={handleSubmit}>
                            <input type="search" placeholder="Look up for a word..." className="Dictionary-form p-2 ms-2 mt-3"
                                   onChange={changeSubmittedWord}/>
                            <Button type="submit" className="Dictionary-btn p-2 m-2">Search</Button>
                            <p className="Dictionary-words-example ms-2">e.g music, sunset, code...</p>
                        </Form>
                    </section>
                </Col>
            </Row>
            <Row>
                <SearchEngine apiData ={results.responsePath} pexelApiData={photos} />
            </Row>
        </div>
    )
} else {
    apiSearch();
    return (
        <Loader
            type="TailSpin"
            color="#e13b57"
            height={100}
            width={100}
            timeout={6000} 
        />
    )
}
}