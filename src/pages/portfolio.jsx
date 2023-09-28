import Project from "../components/Projects";
import beerjoke from '../assets/beerjoke.jpg'
import weather from '../assets/weather.jpg'
import quiz from '../assets/quiz.jpg'
import scheduler from '../assets/scheduler.jpeg'
import readme from '../assets/readme.jpg'
import password from '../assets/password.jpg'




export default function Portfolio() {

  const projects = [
    {
      id: 1,
      image: beerjoke,
      title: "Brewery Locator & Joke Generator",
      link: " https://pb1983.github.io/Project1/",
      gitLink: "https://github.com/pb1983/Project1"
    },
    {
      id: 2,
      image: weather,
      title: "Weather App",
      link: "https://pb1983.github.io/Weather-App/",
      gitLink: "https://github.com/pb1983/Weather-App"
    },
    {
      id: 3,
      image: quiz,
      title: "Javascript Quiz",
      link: "https://pb1983.github.io/Code-Quiz/",
      gitLink: "https://github.com/pb1983/Code-Quiz"
    },
    {
      id: 4,
      image: scheduler,
      title: "Scheduler",
      link: "https://pb1983.github.io/Scheduler/",
      gitLink: "https://github.com/pb1983/Scheduler"
    },
    {
      id: 5,
      image: readme,
      title: "Readme Template Creator",
      link: "https://drive.google.com/file/d/1hb4RXZNVhVY7PescZb_HkRlQGb0GPzdh/view",
      gitLink: "https://github.com/pb1983/ReadMeGenerator"
    },
    {
      id: 6,
      image: password,
      title: "Password Generator",
      link: "https://pb1983.github.io/PW-Generator/",
      gitLink: "https://github.com/pb1983/PW-Generator"
    },
  ];



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="pt-4 pb-2">Portfolio</h3>
            <p className="col-9">Click on an image to be taken to the application (or a video displaying the application if there is no front end). Click on the Github icon to be taken to the project's repository.</p>
          </div>
        </div>
      </div>
      
      <div className="container pt-4">
        <div className="row">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}



