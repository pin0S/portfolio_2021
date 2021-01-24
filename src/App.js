import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';


import './App.scss';
// import Dashboard from './components/Dashboard'

function App() {
  return (
    <main>
      <section class="dashboard">
          
        <Sidebar />
        
        
        <Router>
        
          <div class="content">
          <NavBar />
            <Switch>
              <Route component={Projects} path='/projects' />
              <Route component={About} path='/about' />
              <Route component={Blog} path='/blog' />
            </Switch>
          </div>

        </Router>
      </section>
      <img class="pb" src={'https://assets.stickpng.com/images/5a059a909cf05203c4b6045b.png'} alt={'power button'}/>
    </main>
  );
}

export default App;
