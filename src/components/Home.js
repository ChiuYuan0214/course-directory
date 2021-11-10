import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {    
  
  handleSubmit = (e) => {
    e.preventDefault();
    const teacherFname = this.firstName.value;
    const teacherLname = this.lastName.value;
    const teacherTopic = this.topic.value;
    const path = `teachers/${teacherTopic}/${teacherFname}-${teacherLname}`;
    this.props.history.push(path); // Just like props.match, we manipulate DOM through object.
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
        <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <Link to="teachers/HTML/Tommy-Wingo">Tommy Wingo</Link>
        <Link to="teachers/Design/Irie-Wu">Irie Wu</Link>
        <Link to="teachers/Front-End/Adam-Chiu">Adam Chiu</Link>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={ (input) => this.firstName = input } placeholder="First Name" />
          <input type="text" ref={ (input) => this.lastName = input } placeholder="Last Name" />
          <input type="text" ref={ (input) => this.topic = input } placeholder="Topic" />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;