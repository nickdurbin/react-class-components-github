import React, { Component } from 'react'

export default class FollowerCard extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='avatarContainer'>
          <img className='avatar' src={this.props.user.avatar_url} alt={this.props.user.name} />
        </div>
        <div className ='detailsContainer'>
          <h2>Name: {this.props.user.name}</h2>
          <h3>Username: {this.props.user.login}</h3>
          <h4>Followers: {this.props.user.followers}</h4>
          <h4>Following: {this.props.user.following}</h4>
          <h4>Bio: {this.props.user.bio}</h4>
        </div> 
      </div>
    )
  }
}