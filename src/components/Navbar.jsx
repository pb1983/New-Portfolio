export default function Nav({ links }) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div className=" navbar-brand" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}