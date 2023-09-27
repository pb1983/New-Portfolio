import profpic from '../assets/profpic.png'

export default function About() {
    return (
      <div className="col-6">
          <h3 className="m-4">About Me</h3>

          <img src={profpic} alt="profile picture" className="prof-pic ms-4 mb-4"/>
          <p className="ms-2">
            Welcome to my new Portfolio. In the 9 weeks since the creation of my original page I've learned more than I thought was possible in such a short span of time. These applications display just a handful of the concepts that have been taught over the course of this bootcamp, and while the curriculum will be coming to an end very soon, I know I've barely scratched the surfice of what is possible in this field. My hope is that anyone viewing this page will be reminded of what can be accomplished when you stay committed to your goals and view each challenge as an opportunity to improve. - PB
          
          </p>
        </div>
      );
}