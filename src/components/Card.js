import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    return (
      <div className='mainContainer'>
        <div className='avatarContainer'>
          <img className='avatar' src={this.props.userData.avatar_url} alt={this.props.userData.name} />
        </div>
        <div className ='detailsContainer'>
          <h2>{this.props.userData.name}</h2>
          <h4>{this.props.userData.followers}</h4>
        </div> 
      </div>
    )
  }
}