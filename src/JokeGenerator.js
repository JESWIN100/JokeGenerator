import React, { useState } from 'react';
import axios from 'axios';

// Define the JokeGenerator component
const JokeGenerator = () => {
  // useState hook to manage the joke state, initially empty
  const [joke, setJoke] = useState('');
  
  // useState hook to manage the loading state, initially false
  const [loading, setLoading] = useState(false);

  // Function to fetch a joke from the API
  const fetchJoke = async () => {
    setLoading(true); // Set loading state to true when fetching starts
    try {
      // Make an HTTP GET request to the joke API
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      // Update the joke state with the fetched joke
      setJoke(response.data.value);
    } catch (error) {
      // If there's an error, set the joke state to an error message
      setJoke('Failed to fetch joke. Try again!');
    }
    setLoading(false); // Set loading state to false when fetching is done
  };

  return (
    // Center the content using inline styles
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Joke Generator</h1>
      {/* Button to fetch a joke, disabled when loading */}
      <button onClick={fetchJoke} disabled={loading}>
        {/* Show 'Loading...' when fetching, otherwise show 'Get a Joke' */}
        {loading ? 'Loading...' : 'Get a Joke'}
      </button>
      {/* Display the fetched joke or error message */}
      <p>{joke}</p>
    </div>
  );
};

// Export the JokeGenerator component as the default export
export default JokeGenerator;
