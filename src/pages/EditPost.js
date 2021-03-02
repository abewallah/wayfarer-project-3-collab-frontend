import React from 'react';

const URL = 'http://localhost:4000/api/posts/';

class EditPost extends React.Component {
  state = {
    title: '',
    body: '',
  };

  componentDidMount() {
    fetch(`${URL}${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        this.setState(jsonData);
      })
      .catch((err) => console.log(err));
  }

handleChange = (event) => {
   
    this.setState({
        [event.target.id]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${URL}${this.props.match.params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
    })
    .then(() => this.props.history.push('/wayfarer'))
    .catch(err => console.log(err))
}


  render() {
    return (
      <div>
        <h1>Edit</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              className='form-control'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />

            <textarea
              name='body'
              id='body'
              className='form-control'
              cols='30'
              rows='10'
              value={this.state.body}
              onChange={this.handleChange}
              placeholder='Write post...'
            />
          </div>
          <br />
          <button className='btn btn-success' type='submit'>Edit Post</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
