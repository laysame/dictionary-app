import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core'
import {Card, Col} from "react-bootstrap";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Images from "./Images";
import "./SearchEngine.css";

library.add(faVolumeUp)

export default function SearchEngine(props) {
    return (
        <Col className="col-12 mt-3">
            <div className="SearchEngine-body ms-2">
                <Card className="m-3 p-3">
                    <h1 className="SearchEngine-header">{props.apiData.word}</h1>
                        {props.apiData.phonetics.map(function (phonetic, index) {
                            return (
                            <div key={index}>
                                <Phonetics phonetic={phonetic}/>
                            </div>
                            )
                    })}
                        </Card>
                        {props.apiData.meanings.map(function (meaning, index) {
                            return (
                                <Card className="m-3 p-3" key={index}>
                                    <Meaning meaning={meaning}/>
                                </Card>
                            )
                        })}
                <Card className="m-3 p-3">
                    <Images apiData={props.pexelApiData}/>
                </Card>
            </div>
        </Col>
    )
}