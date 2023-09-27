import profpic from '../assets/profpic.png'

export default function About() {


  return (
    <div className="about-container">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <h3 className="mb-4">About Me</h3>
          <img src={profpic} alt="profile picture" className="prof-pic mb-4" />
        </div>
        <div className="col-md-6 pt-4">
          <p>
            Welcome to my new Portfolio. In the 9 weeks since the creation of my original page, I've learned more than I thought was possible in such a short span of time. These applications display just a handful of the concepts that have been taught over the course of this boot camp, and while the curriculum will be coming to an end very soon, I know I've barely scratched the surface of what is possible in this field. My hope is that anyone viewing this page will be reminded of what can be accomplished when you stay committed to your goals and view each challenge as an opportunity to improve. - PB
          </p>
        </div>
      </div>
    </div>
  );
}