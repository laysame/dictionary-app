import React from "react";
import {Row, Col} from "react-bootstrap";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Images(props) {
    if (props.apiData) {
        return (
            <div className="Images">
                <Row>
                    {props.apiData.map(function (image, index) {
                        return (
                            <Col className="col-4">
                                <a href={image.src.original} target="_blank" rel="noreferrer" key={index}>
                                    <img src={image.src.landscape} className="img-fluid me-5 mb-3 rounded-1"
                                         alt="landscape for the keyword"/>
                                </a>
                            </Col>
                        )
                    })}
                </Row>
            </div>

        )
    } else {
        return (
            <Loader
                type="TailSpin"
                color="#e13b57"
                height={100}
                width={100}
                timeout={6000}
            />
        );
    }
}