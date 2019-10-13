import React, { Component } from 'react';
import Card from './components/Card';
import Search from './components/Search';

export default class App extends Component {
  state = {
    search: '',
    user: {},
    followers: []
  }

  componentDidMount() {
    this.getUser('nickdurbin')
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
          user={this.state.user}
          followers={this.state.followers}
          getFollowers={this.getFollowers} 
        />
      </div>
    )
  }
}
