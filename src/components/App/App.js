import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Description from '../Description';
import Registration from '../Registration';
import Game from '../Game';

const App =(props) => {
    return (
      <Switch>
        <Route exact path="/" component={Description} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/game" component={Game} />
      </Switch>
    )
  }


export default App;
