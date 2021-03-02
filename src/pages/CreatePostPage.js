import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const URL = 'http://localhost:4000/api/posts';

class CreatePostPage extends Component {
  state = {
    title: '',
    body: '',
    city: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      city: this.props.city._id,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.history.push('/wayfarer');
        console.log(data);
        this.props.update();
        this.setState({
          title: '',
          body: '',
          city: '',
        });
      })
      .catch((err) => console.log(err));
  };

  style = {
    height: '100px',
  };
  render() {
    return (

      <div>
        <h2 id='newPostFont'>Add A New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input
                type='text'
                className='form-control'
                placeholder='title of post..'
                id='title'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div>
                <textarea
                className='form-control'
                placeholder='Write post...'
                name='body'
                id='body'
                style={this.style}
                cols='30'
                rows='10'
                value={this.state.body}
                onChange={this.handleChange}
              />
              <label htmlFor='floatingTextarea2'>Post</label>
            </div>
            <br />
          </div>
          <button className='btn btn-success' type='submit'>
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePostPage);
