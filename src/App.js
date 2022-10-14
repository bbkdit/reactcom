import React, { Component } from 'react';
import './App.css';
import { SearchBox } from './components/search-box/search-box';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }
  render() {
    const {monster, searchField} = this.state;
    const filterMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return <div className='App'>
      {/* <input type='search' placeholder='search monster' onChange={e=>this.setState({searchField:e.target.value})} /> */}
      <SearchBox placeholder='monster search' handelSearch={e=>this.setState({searchField:e.target.value})} />
      <CardList user={filterMonsters}/>
      {/* {this.state.monster.map(monster => (<h1 key={monster.id}>{monster.name}</h1>))} */}
    </div>;
  }
}

export default App;
