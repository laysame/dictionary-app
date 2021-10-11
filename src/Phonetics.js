import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";

import "./Phonetics.css";

export default function Phonetics(props) {
    function playAudio(event) {
    event.preventDefault();
        const playAudio = new Audio(props.phonetic.audio);
        playAudio.play();
    }

    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" className="Phonetic-link">
                <FontAwesomeIcon onClick={playAudio} className="Phonetic-body-icon" icon={faVolumeUp} />
            </a>
            <h4 className="Phonetic-header">{props.phonetic.text}</h4>
        </div>
    )
}