import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import NovaSerie from './NovaSerie'
import Series from './Series'
import EditaSerie from './EditaSerie'

const Sobre = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="/images/logo.png" height="30" alt="" />
                </a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/nova'>Nova Série</Link>
                  </li>
                  <li>
                    <Link to='/sobre'>Sobre</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
          <Route exact path='/' component={Home} />
          <Route path='/series-editar/:id' component={EditaSerie} />
          <Route path='/series/:genre' component={Series} />
          <Route exact path='/nova' component={NovaSerie} />
          <Route exact path='/sobre' component={Sobre} />
        </div>
      </Router>
    );
  }
}

export default App
