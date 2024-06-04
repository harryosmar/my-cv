import React from 'react';
import './App.scss';
import {MyResume} from "./entities/data";
import Edus from "./components/Edus";
import WorkExperiences from "./components/WorkExperience";
import Langs from "./components/Lang";
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Salary from "./components/Salary";


function App() {
    return (
        <>
            <div className="letter">
                <div className="header">
                    <div className="header-l">
                        <img className="photo" src={MyResume.photo} alt={MyResume.name}/>
                    </div>
                    <div className="header-r">
                        <h1>{MyResume.name}</h1>
                        <div className="role">{MyResume.role}</div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-l">
                        <Contact {...MyResume.contact}></Contact>
                        <Skills skills={MyResume.skills}></Skills>
                        <Edus educations={MyResume.educations}></Edus>
                        <Langs langs={MyResume.languages}></Langs>
                        <Expertise exps={MyResume.expertise}></Expertise>
                        {MyResume?.salary && <Salary {...{...MyResume.salary}}></Salary>}
                    </div>
                    <div className="content-r">
                        <Profile description={MyResume.profile}></Profile>
                        <WorkExperiences exps={MyResume.experiences}></WorkExperiences>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
