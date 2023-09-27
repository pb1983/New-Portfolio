
import {AiFillGithub} from 'react-icons/ai'


export default function Project({project}) {
    
    
    return (
        <div className="col-md-4">
            <a href={project.link}>
          <img src={project.image} alt={project.title} className="img-resize" /></a>
          <h4 className="pt-2">{project.title} <a href={project.gitLink}><AiFillGithub className="text-dark"/></a></h4>
        </div>
      );
    }
    
   
