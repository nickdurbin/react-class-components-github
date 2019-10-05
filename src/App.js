import React, { Component } from 'react'
import Axios from 'axios'
import Card from './components/Card';
import FollowerList from './components/FollowerList';

export default class App extends Component {
  state = {
    userData: [],
    followerData: []
  }

  componentDidMount () {
    Axios.get('https://api.github.com/users/nickdurbin')
      .then(res => {
        return this.setState({ userData: res.data })
        console.log(res.data, 'This is your data form Github.')
      })
      .catch(err => {
        console.log(err, 'You did not get the data.')
      })

    Axios.get('https://api.github.com/users/nickdurbin/followers')
      .then(res => {
        return this.setState({ ...this.state, followerData: res.data })
        console.log(res.data, 'You have followers data')
      })
      .catch(err => {
        console.log(err, 'You have no followers data.')
      })
  }

  render() {
    return (
      <div className='app'>
        <h1>GitHub Data</h1>
        <Card userData={this.state.userData} />
        <div className='followersDisplay'>
          <h2>List of Followers</h2>
          <div className='followerCards'>
            <FollowerList followerData={this.state.followerData} />
          </div>
        </div>
      </div>
    )
  }
}
