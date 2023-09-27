export default function Nav({ links }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid d-flex justify-content-between px-4">
        <h3 className="text-light px-2 pt-2">Phil Bryer</h3>
        <div className=" navbar-brand" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}