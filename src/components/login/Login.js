import React from 'react';
import "./login.css";
import { loginUrl } from "/Users/Neik/my-apps/Spotify/spotify-app/src/spotify.js"

export default function Login() {
  return (
    <div className='login'>
      <img className="logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt='logo' />
      <a href={loginUrl}>LOG IN TO SPOTIFY</a>
    </div>
  )
}
