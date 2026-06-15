import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  const myelement = <h2>I Love JSX!</h2>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      <h3>User Information</h3>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <Exercise />
    </div>
  );
}

export default App;
