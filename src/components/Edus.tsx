import {EducationEntity} from "../entities/data";
import React from "react";

function Edu({title, university, year}: EducationEntity) {
    return (
        <li>
            <p className="edu-title">{title}</p>
            <p className="edu-uni">{university}</p>
            <p className="edu-year">{year}</p>
        </li>
    );
}

function Edus({educations = []}: { educations?: EducationEntity[] }) {
    return (
        <div className="edu left-side-box">
            <h2 className="point">education</h2>
            <ul>
                {educations.map((v) => <Edu {...v}></Edu>)}
            </ul>
        </div>
    );
}

export default Edus;