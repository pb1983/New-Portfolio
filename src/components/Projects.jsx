
import { useState } from 'react'
import notebook from '../assets/notebook.jpg'
import weather from '../assets/weather.jpg'
import quiz from '../assets/quiz.jpg'
import scheduler from '../assets/scheduler.jpeg'
import readme from '../assets/readme.jpg'
import password from '../assets/password.jpg'

export default function Project() {


    return (<div className="container pt-4">
        <div className="row">
            <div className="col-md-4">
                <img src={notebook} alt="notebook" className="img-resize" />
                <a href="https://github.com/pb1983/Note-Taker"><h4>Note-Taker App</h4></a>
                
            </div>
            <div className="col-md-4">
                <img src={weather} alt="weather" className="img-resize" />
                <h4>Weather App</h4>
            </div>
            <div className="col-md-4">
                <img src={quiz} alt="quiz" className="img-resize" />
                <h4>Javascript Quiz</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <img src={scheduler} alt="clock and calendar" className="img-resize" />
                <h4>Scheduler</h4>
            </div>
            <div className="col-md-4">
                <img src={readme} alt="readme logo" className="img-resize" />
                <h4>Readme Template Creator</h4>
            </div>
            <div className="col-md-4">
                <img src={password} alt="password field and lock" className="img-resize" />
                <h4>Password Generator</h4>
            </div>
        </div>
    </div>
    );
}


