import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import {Card, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import Meaning from "./Meaning";
library.add(faVolumeUp)

export default function SearchEngine(props) {
    console.log(props.apiData)
    return (
        <Col className="col-12 mt-3">
            <Card className="Dictionary-card">
                <Card.Body>
                    <div className="Dictionary-body ms-2">
                        <h1>{props.apiData.word} <button><FontAwesomeIcon className="Dictionary-body-icon" icon={faVolumeUp} /></button></h1>
                        <h2>{props.apiData.phonetic}</h2>
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