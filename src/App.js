import React, { useEffect, useState } from 'react';
import "./App.css";
import Login from "./components/login/Login.js";
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from "spotify-web-api-js";

// create a new instance of the Spotify Web API client
const spotify = new SpotifyWebApi();

function App() {
    // declare state variable `token` and a setter function for it
  const [token, setToken] = useState(null);

  //this hook is used to retrieve the access token from the URL hash and use it to get the authenticated user's information from the Spotify API
  useEffect(() => {
        // retrieve the access token from the URL hash
    const hash = getTokenFromUrl();
        // clear the URL hash
    window.location.hash = "";
        // store the access token in a variable
    const _token = hash.access_token;

        // if the token exists
    if (_token) {
            // set the token state variable
      setToken(_token)
            // set the token in the Spotify Web API client
      spotify.setAccessToken(_token);
        // get the authenticated user's information and log it to the console
      spotify.getMe().then(user => {
        console.log("Hey", user);
      }
      )
    }
  }, []); // the empty array ensures this effect only runs once, on mount

  return (
    <div className="app">
      {
        token ?
          <h1>It works</h1>
          : (
            <Login />
          )
      }
    </div>
  );
}

export default App;

