import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SecuredRoute from '~/routes/SecuredRoutes'

import Home from '~/pages/Home'
// import Login from '~/pages/Login'
import TodoList from '~/pages/TodoList'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={TodoList} />
      <SecuredRoute path="/home" exact component={Home} />
    </Switch>
  )
}

export default Routes
