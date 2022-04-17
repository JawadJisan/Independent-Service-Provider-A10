import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
             <section className="skills container" id="skills">
        <div className="">
            <h2 className="title">My skills</h2>

            <div className="skills-content  flex-container">
                <div className="column right">
                
                <div className="bars ">
                        <div className="info">
                            <span>Node.JS</span>
                            <span>50%</span>
                        </div>
                        <div className="line node"></div>
                    </div>
                    
                    <div className="bars">
                        <div className="info">
                            <span>C</span>
                            <span>90%</span>
                        </div>
                        <div className="line c"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C++</span>
                            <span>65%</span>
                        </div>
                        <div className="line cpp"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>45%</span>
                        </div>
                        <div className="line python"></div>
                    </div>
                    
                    
                    
                </div>

                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>95%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React.JS</span>
                            <span>80%</span>
                        </div>
                        <div className="line react"></div>
                    </div>

                    
                    
                   
                   
                </div>
            </div>
        </div>
    </section>

            
    );
};

export default Skills;