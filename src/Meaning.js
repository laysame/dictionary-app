import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props)
    return (
        <div className="Meaning">
            <h3 className="Dictionary-partOfSpeech">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definiton, index){
                return (
                    <div key={index}>
                        <p className="Dictionary-definition">
                           <strong>Definition:</strong> {definiton.definition}
                            <br/>
                            <em className="Dictionary-examples">
                                <strong>Example:</strong> {definiton.example}
                            </em>

                            <Synonyms synonyms={definiton.synonyms}/>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}