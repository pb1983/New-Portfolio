import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div>
        <h6>
  
        <a href="https://github.com/pb1983" className="font-size"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/phil-bryer-9331318a" className="font-size"><AiFillLinkedin /></a>
        <a href="https://stackoverflow.com/users/22641076/that-chimps-alright" className="font-size"><BsStackOverflow /></a>
      

        </h6>
      </div>
    </footer>
  );
};

export default Footer;
