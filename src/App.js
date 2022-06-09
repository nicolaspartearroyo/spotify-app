import React, { useEffect, useState } from 'react';
import "./App.css";
import Login from "../src/components/login/Login.js";
import { getTokenFromUrl } from './spotify.js';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log("Hey", user);
      }
      )
    }
  }, []);

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

