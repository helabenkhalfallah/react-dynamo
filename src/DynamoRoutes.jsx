import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import DynamoHomePage from './DynamoHomePage'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/react-dynamo-home" component={DynamoHomePage} />
    </Switch>
  </HashRouter>
)

export default Routes
