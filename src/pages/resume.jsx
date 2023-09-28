import MyResume from '../assets/Phil_Bryer_Resume.pdf'

export default function Resume() {
  
  return (
    <div className="container mt-4 pt-4 m-2">
      <div className="row justify-content-center text-center">
        <div className="col-md-12 mt-4">
          <h3 className='mt-4'>Resume</h3>
          <p className='pt-2 pb-2'>
            If you would like to see more of my credentials and previous experience, download my <u><a href={MyResume} download>resume</a></u>.
          </p>
        </div>
        <div className="col-md-2">
          <h5>Front End Skills:</h5>
          <ul className='list-group'>
            <li className='list-group-item'>HTML</li>
            <li className='list-group-item'>CSS</li>
            <li className='list-group-item'>Javascript</li>
            <li className='list-group-item'>Bootstrap</li>
            <li className='list-group-item'>Bulma</li>
            <li className='list-group-item'>React</li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5>Server-Side Skills:</h5>
          <ul className='list-group'>
            <li className='list-group-item'>Node.js</li>
            <li className='list-group-item'>Express</li>
            <li className='list-group-item'>MySQL</li>
            <li className='list-group-item'>MongoDB</li>
            <li className='list-group-item'>API routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}