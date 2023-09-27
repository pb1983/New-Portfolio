import MyResume from '../assets/Phil_Bryer_Resume.pdf'

export default function Resume() {
    return (
        <div className="mt-2 m-2">
          <h3>Resume</h3>
          <p>
            If you would like to see more of my credentials and previous experience, download my <u><a href={MyResume} download>resume</a></u>.
          </p>
          <h5>Front End Skills:</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>React</li>
          </ul>
          <h5>Server-Side Skills:</h5>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>API routing</li>
          </ul>
        </div>
      );
}