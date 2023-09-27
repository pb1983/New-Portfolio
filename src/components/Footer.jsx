import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div>
        <h6>
  
        <a href="https://github.com/pb1983" className="icon-size"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/phil-bryer-9331318a" className="icon-size"><AiFillLinkedin /></a>
        <a href="https://stackoverflow.com/users/22641076/that-chimps-alright" className="icon-size"><BsStackOverflow /></a>
      

        </h6>
      </div>
    </footer>
  );
};

export default Footer;
