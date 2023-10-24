import React from 'react';
import './App.scss';
import { MyResume} from "./entities/data";
import Edus from "./components/Edus";
import WorkExperiences from "./components/WorkExperience";
import Langs from "./components/Lang";
import Profile from "./components/Profile";
import Expertise from "./components/Expertise";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
    return (
        <>
            <div className="letter">
                <div className="header">
                    <h1>{MyResume.name}</h1>
                    <div className="role">{MyResume.role}</div>
                </div>
                <div className="content">
                    <div className="content-l">
                        <Contact {...MyResume.contact}></Contact>
                        <Skills skills={MyResume.skills}></Skills>
                        <Edus educations={MyResume.educations}></Edus>
                        <Langs langs={MyResume.languages}></Langs>
                        <Expertise exps={MyResume.expertise}></Expertise>
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
