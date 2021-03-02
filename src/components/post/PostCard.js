import {Link } from 'react-router-dom';
import React, {useState} from 'react';



function PostCard(props) {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState)
  }
console.log(props)
  return (
    <div>
      <div className='card post-card'>
        <div className='row' id='post-div' >
          <div className="post-div" >
            <Link className="post-link" to={`/show-post/${props.post._id}`}>{props.post.title}</Link>
            <h5>{props.post.createdAt}</h5>
          </div>
          <div className='btn-div'>
          <Link to={`/edit-post/${props.post._id}`}><button className='btn btn-warning post-btns'>Edit</button>{' '}</Link>
                  <button className='btn btn-warning post-btns' onClick={() => toggleModalState()} >Delete</button>
          </div>
          <div>
            <div className={`modalBackground modalShowing-${modalState}`}>
              <div className="modalInner">
                <div className="wrapper fadeInDown">
                  <div id="formContent">
                    <div className="modal-header flex-column">
                      <div className="icon-box">
                        <img id="deleteIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xuqoEn6bxVzH0Jlu09DgEEeKihPLE0CsaQ&usqp=CAU" alt=""/>
                      </div>
                    </div>
                      <h5 className="modal-title w-100">Please confirm</h5>
                    <div className="modal-body">
                      <p>Are you sure you want to delete this post?</p>
                    </div>  
                    <div className="justify-content-center">
                      <button id="cancelBtn" className="btn btn-secondary" onClick={() => toggleModalState()}>Cancel</button>
                      <button id="deletePostBtn" className="btn btn-danger" onClick={() => props.deletePost(props.post._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PostCard;