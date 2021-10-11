import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {Card, Col} from "react-bootstrap";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
library.add(faVolumeUp)

export default function SearchEngine(props) {
    console.log(props.apiData)
    return (
        <Col className="col-12 mt-3">
            <Card className="Dictionary-card">
                <Card.Body>
                    <div className="Dictionary-body ms-2">
                        <h1>{props.apiData.word}</h1>

                        {props.apiData.phonetics.map(function (phonetic, index) {
                            return (
                                <div key={index}>
                                    <Phonetics phonetic={phonetic}/>
                                </div>
                            )
                        })}
                        {props.apiData.meanings.map(function (meaning, index){
                            return <div key={index}>
                                <Meaning meaning={meaning} />
                            </div>
                        })}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}