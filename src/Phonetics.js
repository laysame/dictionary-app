import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";

import "./Phonetics.css";

export default function Phonetics(props) {
    console.log(props.phonetic)
    return (
        <div className="Phonetic">
            <h2 className="Phonetic-header">{props.phonetic.text}</h2>
            <a href={props.phonetic.audio} target="_blank" className="Phonetic-link">
                <FontAwesomeIcon className="Phonetic-body-icon" icon={faVolumeUp} />
            </a>
        </div>
    )
}