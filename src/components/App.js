import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';


const App = () => (
  <HashRouter basename="/course-directory">
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} /> {/* exact will force to match exactly the same URL */}
        <Route path="/about" component={About} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:fname-:lname" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </HashRouter>
);

export default App;