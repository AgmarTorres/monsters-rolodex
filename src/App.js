import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import Teste from './components/teste/teste.component'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:""
    }
   // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
   
  }

  //handleChange(e){this.setState({searchField: e.target.value })}
  handleChange = (e) => 
    {this.setState({searchField: e.target.value })}
  

  render(){
    const {monsters , searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toString().toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox placeholder = "Search for monsters" handleChange = {this.handleChange}/>      
        <CardList monsters = {filteredMonster}></CardList>,
        <Teste></Teste>
      </div>
    );
  }
}

export default App;
