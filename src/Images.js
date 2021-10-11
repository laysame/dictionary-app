import React from "react";
import {Row, Col} from "react-bootstrap";

export default function Images(props) {
    if (props.apiData){
        return (
        <div className="Images">
            <Row>
                {props.apiData.map(function (image, index){
                    return (
                        <Col className="col-4">
                            <a href={image.src.original} target="_blank" rel="noreferrer" >
                                <img src={image.src.landscape} key={index} className="img-fluid me-5 mb-3 rounded-1"/>
                            </a>
                        </Col>
                    )
                })}
            </Row>
        </div>
        )
    } else {
        return null;
    }
}