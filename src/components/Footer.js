import React from 'react';
const Footer =  () => {
  return (
    <footer>
    <div className="container">
      <div id="footerRow" className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <ul id="footerUl" className="list-inline text-center">
            <li className="list-inline-item">
              <a id="footerSocials" href="#">
                <span className="fa-stack fa-lg">
                  <i id="twitter" className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a id="footerSocials" href="#">
                <span className="fa-stack fa-lg">
                  <i id="facebook" className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a id="footerSocials" href="#">
                <span className="fa-stack fa-lg">
                  <i id="github" className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <p id="copyright" className="copyright text-muted mt-5 ml-5">Copyright &copy; Wayfarer 2021</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;