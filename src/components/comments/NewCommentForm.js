import React from 'react';

class NewCommentForm extends React.Component {
  state = {
    
    body: '',
    post: this.props.post
    
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      
    });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/comments', {
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
        console.log(data);
        this.props.update();
        this.setState({
          // title: '',
          body: '',
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return(
      <div>
        <h2>Add a comment</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            {/* <div>
              <input
                type='text'
                className='form-control'
                placeholder='title of post..'
                id='title'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div> */}
            {/* <br /> */}
            <div class='form-floating'>
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
              <label htmlFor='floatingTextarea2'>Comment</label>
            </div>
            <br />
          </div>
          <button className='btn btn-success' type='submit'>
            Add Comment
          </button>
        </form>
      </div>
    );
  }

}

export default NewCommentForm;