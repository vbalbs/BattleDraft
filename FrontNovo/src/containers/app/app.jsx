import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home/home'
import About from '../about'

class App extends React.Component {
  render () {
    return (
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
