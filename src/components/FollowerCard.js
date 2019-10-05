import React, { Component } from 'react'

export default class FollowerCard extends Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='avatarContainer'>
          <img className='avatar' src={this.props.userData.avatar_url} alt={this.props.userData.name} />
        </div>
        <div className ='detailsContainer'>
          <h2>Name: {this.props.userData.name}</h2>
          <h3>Username: {this.props.userData.login}</h3>
          <h4>Followers: {this.props.userData.followers}</h4>
          <h4>Following: {this.props.userData.following}</h4>
          <h4>Bio: {this.props.userData.bio}</h4>
        </div> 
      </div>
    )
  }
}