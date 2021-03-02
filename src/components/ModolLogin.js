import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModolLogin = () => {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <Link onClick={() => toggleModalState()}>Log In</Link>

      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className='modalInner'>
          <div className='modalImage'>
            <img
              src='https://images.unsplash.com/photo-1488085061387-422e29b40080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
              alt='modalImg'
            />
          </div>
          <div className='wrapper fadeInDown'>
            <div id='formContent'>
              <div className='fadeIn first'>
                <img src='' id='icon' alt='User Icon' />
              </div>
              <form action=''>
                <input
                  type='email'
                  id='login'
                  className='fadeIn second'
                  name='login'
                  placeholder='Email'
                />
                <input
                  type='text'
                  id='password'
                  className='fadeIn third'
                  name='login'
                  placeholder='Password'
                ></input>
                <input
                  type='submit'
                  className='fadeIn fourth'
                  value='Log In'
                ></input>
              </form>
              <div id='formFooter'>
                <a href='/' className='underlineHover'>
                  Forgot Password?
                </a>
              </div>
              <button id='exitBtn' onClick={() => toggleModalState()}>
                Exit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModolLogin;
