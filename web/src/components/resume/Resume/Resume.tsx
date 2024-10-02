function Resume() {
  return (
    <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav id="navi">
              <ul>
                <li>
                  <a href="#page-1">Education</a>
                </li>
                <li>
                  <a href="#page-2">Experience</a>
                </li>
                <li>
                  <a href="#page-3">Skills</a>
                </li>
                <li>
                  <a href="#page-4">Acknowledgements</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9">
            <div id="page-1" className="page one">
              <h2 className="heading">Education</h2>
              {/* Education items */}
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2003-2009</span>
                  <h2>Bachelor in Systems Engineering</h2>
                  <span className="position">
                    National University of Engineering
                  </span>
                </div>
              </div>
              {/* Add more education items here */}
            </div>

            <div id="page-2" className="page two">
              <h2 className="heading">Experience</h2>
              {/* Experience items */}
              <div className="resume-wrap d-flex ftco-animate">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-ideas"></span>
                </div>
                <div className="text pl-3">
                  <span className="date">2021-Today</span>
                  <h2>Software Engineer</h2>
                  <span className="position">BairesDev</span>
                </div>
              </div>
              {/* Add more experience items here */}
            </div>

            {/* Add Skills and Acknowledgements sections here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
