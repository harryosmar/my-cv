import {LanguageEntity} from "../entities/data";
import React from "react";


function Lang({name, progress}: LanguageEntity ) {
    return (
        <div className="lang-item">
            <div className="lang-item-name" style={{width: "20%"}}>{name}</div>
            <div className="progress-container" style={{width: "80%"}}>
                <div className="progress-bar" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

function Langs({langs = []}: { langs?: LanguageEntity[] }) {
    return (
        <div className="lang">
            <h2 className="point">Languages</h2>
            {langs.map((v) => <Lang {...v}></Lang>)}
        </div>
    );
}

export default Langs;