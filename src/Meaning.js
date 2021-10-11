import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="Meaning">
                <h2 className="Dictionary-partOfSpeech">{props.meaning.partOfSpeech}</h2>
                {props.meaning.definitions.map(function (definiton, index){
                    return (
                        <div key={index}>
                            <div className="Meaning-definition">
                                <p>{definiton.definition}</p>
                            </div>
                            <div className="Meaning-examples">
                                <p>{definiton.example}</p>
                            </div>
                            <Synonyms synonyms={definiton.synonyms}/>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null;
    }
}