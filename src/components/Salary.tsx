import React from "react";
import {SalaryEntity} from "../entities/data";

function Salary({current, expected}: SalaryEntity ) {
    return (
        <div className="salary left-side-box">
            <h2 className="point">Salary</h2>
            <p>Current: {current}</p>
            <p>Expected: {expected}</p>
        </div>
    );
}

export default Salary;