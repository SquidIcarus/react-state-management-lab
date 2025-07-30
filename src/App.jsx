// First Import the 'useState()' hook from React
// EXERCISE
// 1. Create a new state variable named `team` and set the initial state to an empty array []
// 2. Create a new state variable named `money` and set the initial state to `100`
// 3. Create a new state variable named `zombieFighters` and set the initial state to the given array of objects of 'fighters'
// 4. Display the list of `zombieFighters` by mapping the array into the UI of `App.jsx`
// 5. Display the current value of `money` in the UI

import { useState } from 'react'; // imports the `useState()` hook from react
import './App.css';

// ************************** DEFINING THE APP COMPONENT ************************************* //

const App = () => {
  const [team, setTeam] = useState([]); // Step 1. `team` is the state variable, `setTeam` is the setter function, `useState` is set with an empty array
  const [money, setMoney] = useState(100); // Step 2. `money` = state variable, `setMoney` = setter function, initial state set to `100`
  const [zombieFighters, setZombieFighters] = useState([  // Step 3. the list of 'fighters' is the argument passed to the `useState()` hook.
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: '/images/Rhythm Guitar.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: '/images/Roadie.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: '/images/Conga.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: '/images/Drummer.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: '/images/Guitar.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: '/images/Medic Backup Singer.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: '/images/Engineer.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: '/images/Bass.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: '/images/Keys.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: '/images/Lead.png',
    },
  ]);

  //*********************************** JSX THAT GETS RENDERED TO THE SCREEN **************************/

  return (
    <>

      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>               {/*Displays the current value of `money` */}
      <ul>
        {zombieFighters.map((fighter) => (  // uses map to iterate over the `zombieFighters` array
          <li>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button type="submit">Add</button>

          </li>
        ))}
      </ul>

    </>
  );
}

export default App

