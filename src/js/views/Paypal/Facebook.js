import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

export default function App() {
  return (
    <FacebookLoginWithButton
      appId="1206715649505081"
      autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"/>
    )
}