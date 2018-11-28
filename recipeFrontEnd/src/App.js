import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import UserPage from './components/UserPage.js';
import NewRecipe from './components/NewRecipe.js';
import './App.css';

class App extends Component {
  state = {
    loggedInUserId: 1
  }

  render() {
    return (
      <BrowserRouter>
        <div className="col-container base-div">
          <div className="top-header-padding"> </div>
          <Route path=""component={HomePage} exact/>
          <Route path="/recipes" component={HomePage} exact/>
          <Route path="/my-page" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} exact/>
          <Route path="/newRecipe" render={(props) => <NewRecipe {...props} userId={this.state.loggedInUserId} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
