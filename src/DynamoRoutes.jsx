import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamoHomePage from './DynamoHomePage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/react-dynamo-home" component={DynamoHomePage} />
    </Switch>
  </BrowserRouter>
)

export default Routes
