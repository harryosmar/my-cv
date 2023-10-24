import React from "react";
function Skills({skills = []}: { skills?: string[] }) {
    return (
        <div className="skills">
            <h2 className="point">SKILLS</h2>
            <div className="skills-content">
                {skills.join(", ")}
            </div>
        </div>
    );
}

export default Skills;