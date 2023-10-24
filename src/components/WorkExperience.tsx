import {WorkExperienceEntity} from "../entities/data";
import React from "react";

function WorkExperience({ title, company, dates, responsibilities = []  }: WorkExperienceEntity) {
    return (
        <div className="work-exp">
            <h3 className="job-title">{title}</h3>
            <div className="job-company">
                <div>{company}</div>
                <div>{dates}</div>
            </div>
            <div className="job-desc">
                <ul>
                    {responsibilities?.map((v) => <li>{v}</li>)}
                </ul>
            </div>
        </div>
    );
}

function WorkExperiences({ exps = []  }: {exps?: WorkExperienceEntity[]}) {
    return (
        <div>
            <h2 className="point">Work Experience</h2>
            <div>
                {exps.map((v) => <WorkExperience {...v}></WorkExperience>)}
            </div>
        </div>
    );
}

export default WorkExperiences;