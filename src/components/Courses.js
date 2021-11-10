import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({ match }) => (

    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2> 
        <ul className="course-nav">
          <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
          <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
          <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        </ul>
      </div>
      
      {/* Write routes here... */}
      
      <Route path={`${match.path}/html`} render={ () => <CourseContainer data={HTMLCourses} /> } />
      <Route path={`${match.path}/css`} render={ () => <CourseContainer data={CSSCourses} /> } />
      <Route path={`${match.path}/javascript`} render={ () => <CourseContainer data={JSCourses} /> } />
      <Route exact path={match.path} render={ () => <Redirect to={`${match.url}/html`} /> } /> {/* If you don't put exact keyword before path, everytime you refresh ( equal to rerender the entire app ), it will get a redirect command in highest priority even you specified the URL to courses/css. */}
      
    </div>

);

export default Courses;