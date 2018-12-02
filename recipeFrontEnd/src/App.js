import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage.js';
import UserPage from './components/UserPage.js';
import NewRecipe from './components/NewRecipe.js';

class App extends Component {
  // STARTS WITH LOGGED IN STATE AS USERNAME "CHANG"
  state = {
    loggedInUserId: "5c01b2c5f4caaa194b0eee00" //Chang's ID
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
          <Route path="/user" render={(props) => <UserPage {...props} userId={this.state.loggedInUserId}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
