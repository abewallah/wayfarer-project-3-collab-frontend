import React, { useState } from 'react';
import Icon from '../../images/icon.png';

const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  const [modalState2, setModalState2] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  const toggleModalState2 = () => {
    setModalState2(!modalState2)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <a className="navbar-brand" href="/wayfarer">Wayfarer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
        <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <div id="click-to-open" className={`modalBackground modalShowingSignup-${modalState2}`}>
            <div className="modalInner">
            <div className="wrapper fadeInDown">
              <div id="formContent">
                <div className="fadeIn first">
                  <img src={Icon} id="icon1" alt="User Icon"/>
                </div>
                <form action="">
                  <input type="text" id="username" className="fadeIn second" name="login" placeholder="Username" />
                  <input type="email" id="login" className="fadeIn second" name="login" placeholder="Email" />
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"></input>
                  <input id="signUpButton" type="submit" class="fadeIn fourth" value="Sign Up"></input>
                </form>
                <button id="exitBtn"  onClick={() => toggleModalState2()}> 
                  Exit
                </button>
              </div>
          </div>
            </div>
          </div>
          <li className="nav-item">
            <a onClick={() => toggleModalState2()} className="nav-link">Sign Up</a>
          </li>

          <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="wrapper fadeInDown">
              <div id="formContent">
                <div className="fadeIn first">
                  <img src="https://img.icons8.com/bubbles/2x/login-rounded-right.png" id="icon" alt="User Icon"/>
                </div>
                <form action="">
                  <input type="email" id="login" className="fadeIn second" name="login" placeholder="Email" />
                  <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password"></input>
                  <input id="loginButton" type="submit" class="fadeIn fourth" value="Log In"></input>
                </form>
                <div id="formFooter">
                  <a href="/" className="underlineHover">Forgot Password?</a>
                </div>
                <button id="exitBtn"  onClick={() => toggleModalState()}> 
                  Exit
                </button>
              </div>
          </div>
        </div>
        </div>
          <li className="nav-item">
            <a onClick={() => toggleModalState()} className="nav-link">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};
export default Navbar;
