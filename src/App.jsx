// First Import the 'useState()' hook from React
// EXERCISE
// 1. Create a new state variable named `team` and set the initial state to an empty array []
// 2. Create a new state variable named `money` and set the initial state to `100`
// 3. Create a new state variable named `zombieFighters` and set the initial state to the given array of objects of 'fighters'
// 4. Display the list of `zombieFighters` by mapping the array into the UI of `App.jsx`
// 5. Display the current value of `money` in the UI
// 6a. Create function named `handleAddFighter()`
// 6b. this function should add the selected character's object to the existing team state array.
// 6c. remove the character from the `zombieFighters` state so they can't be added again
// 6d. Upon adding a character to your team, subtract the character's `price` from your current `money` value.
// 6e. Check `money` state for enough money to afford a character's price to add, otherwise log, `Not enough money`
// 7a. Verify team array characters. If `team` arraay length is 0, display `Pick some team menters!` in the UI
// 7b. If characters in team, display each one in the UI.


import { useState } from 'react'; // imports the `useState()` hook from react
import './App.css';

// ************************** DEFINING THE APP COMPONENT ************************************* //

const App = () => {
  const [team, setTeam] = useState([]); // STEP 1. `team` is the state variable, `setTeam` is the setter function, `useState` is set with an empty array
  const [money, setMoney] = useState(100); // STEP 2. `money` = state variable, `setMoney` = setter function, initial state set to `100`
  const [zombieFighters, setZombieFighters] = useState([  // STEP 3. the list of 'fighters' is the argument passed to the `useState()` hook.
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

  const handleAddFighter = (fighter) => {    // STEP 6a. `handleAddFighter` function accepts a fighter object as an argument
    if (money >= fighter.price) {             // STEP 6e. If `money` state is greater or equal to fighter's price, then execute...
      setTeam([...team, fighter]);             // STEP 6b. spreads the existing `team` array and adds the new fighter ** checked components logs added fighter
      setZombieFighters(prevZombieFighters => prevZombieFighters.filter(zombieFighter => zombieFighter.id !== fighter.id)); // STEP 6c. uses `filter()` to create a new array after checking if the id matches the fighter added to the team, if 'no', excluede fighter from the new array 
      setMoney(money - fighter.price);         // STEP 6d. subtracts the fighters price from current money and updates the money state
      console.log('add figher: ', fighter);
    } else {                                   // STEP 6e. If `money` state !== fighter's price, then log...
      console.log('Not enough money!');
    }
  };

  //*********************************** JSX THAT GETS RENDERED TO THE SCREEN **************************/

  return (
    <>

      <h1>Zombie Fighters</h1>
      <h4>Money: {money}</h4>               {/* STEP 5. Displays the current value of `money` */}
      {team.length === 0 ? (                // STEP 7a. check if there are `0` team members
        <p>Pick some band members!</p>      // will disply if `0` team members
      ) : (
        <>
          <h2>Your band of Zombie Fighters: {team.length}</h2> {/* header tag for team with team member count */}
          <ul>
            {team.map((fighter) => (         // STEP 7b. displays `team` state when fighter is added
              <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <h3>{fighter.name}</h3>
                <p>Price: {fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <h2>The Lineup:</h2>
      <ul>
        {zombieFighters.map((fighter) => (  // STEP 4. uses map to iterate over the `zombieFighters` array
          <li key={fighter.id}>             {/* added key for identification */}
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button> {/* STEP 6. connects `handleAddFighter` function to button */}

          </li>
        ))}
      </ul>

    </>
  );
}

export default App

