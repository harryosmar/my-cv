import React from "react";

function Expertise({exps = []}: { exps?: string[] }) {
    return (
        <div className="expertise">
            <h2 className="point">Expertise</h2>
            <ul>
                {exps.map((v) => <li>{v}</li>)}
            </ul>
        </div>
    );
}

export default Expertise;