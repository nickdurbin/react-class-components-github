import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state.input) {}
  }
  
  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.getUser(this.state.input)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Search Usernames..."
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}