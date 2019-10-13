import React, { Component } from 'react'

export default class Followers extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    this.props.getFollowers()
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {this.state.isOpen === false ? 'Show Followers' : 'Hide Followers'}
        </button>
        <div className="followers">
          {this.props.followers && this.state.isOpen === true && this.props.followers.map(flwr => {
            return(
              <a href={flwr.html_url} target="_blank" rel="noopener noreferrer" key={flwr.id}>
                <div className="followerCard">
                  <img src={flwr.avatar_url} alt={flwr.name} />
                  <p>{flwr.login}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}