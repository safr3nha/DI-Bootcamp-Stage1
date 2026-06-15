import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial'
};

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Exercise 3</h1>
        <p className="para">This is a styled paragraph inside the Exercise component.</p>
        <a href="https://react.dev" target="_blank" rel="noreferrer">Visit React</a>
        <form style={{ marginTop: '20px' }}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ display: 'block', marginTop: '20px' }} />
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
