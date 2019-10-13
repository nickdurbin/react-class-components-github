import React, { Component } from 'react'
import Axios from 'axios'
import Card from './components/Card';
import FollowerList from './components/FollowerList';
import Search from './components/Search';

export default class App extends Component {
  state = {
    followerData: [],
    search: '',
    user: {},
    follower: []
  }

  componentDidMount () {
    Axios.get('https://api.github.com/users/nickdurbin')
      .then(res => {
        console.log(res.data, 'This is your data form Github.')
        return this.setState({ user: res.data })
      })
      .catch(err => {
        console.log(err, 'You did not get the data.')
      })

    Axios.get('https://api.github.com/users/nickdurbin/followers')
      .then(res => {
        console.log(res.data, 'You have followers data')
        return this.setState({ ...this.state, followerData: res.data }) 
      })
      .catch(err => {
        console.log(err, 'You have no followers data.')
      })
  }

  getUser = (searchInput) => {
    this.setState({ search: searchInput })
    fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res })
      })
      .catch(err => console.log(err))
    }

  getFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.search}/followers`)
      .then(res => res.json())
      .then(res => {
        this.setState({ followers: res })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='app'>
        <h1>GitHub Data</h1>
        <Search getUser={this.getUser} getFollowers={this.getFollowers} />
        <Card 
          userData={this.state.userData}
          user={this.state.user}
          followers={this.state.followers}
          getFollowers={this.getFollowers} 
        />
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
