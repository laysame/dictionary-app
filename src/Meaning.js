import React from "react";

export default function Meaning(props) {
    console.log(props)
    return (
        <div className="Meaning">
            <h3 className="Dictionary-partOfSpeech">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definiton, index){
                return (
                    <div key={index}>
                        <p className="Dictionary-definition">
                           Definition {index}: {definiton.definition}
                            <br/>
                            <em className="Dictionary-examples">
                                Example {index}: {definiton.example}
                            </em>
                        </p>
                    </div>

                )
            })}

        </div>

    )
}