// import curriculumvitae from './assets/images/curriculum-vitae.png'
import ResumeArc from './assets/images/Resume.png'

function Nav() {
    return (
      <>
        <nav className="navbar bg-white">
          <div className="container">
            <div className="navbar-content">
              <div className="brand-and-toggler">
                <a href="" className="navbar-brand">
                  <img
                    src={ResumeArc}
                    alt="Curriculum Vitae Logo"
                    className="navbar-brand-icon"
                  />
                </a>
                <button type="button" className="navbar-toggler-btn">
                  <div className="bars">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
export default Nav




