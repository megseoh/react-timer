import React from 'react';
import Nav from 'Nav';
import Timer from 'Timer';
import Countdown from 'Countdown';

export default function Main(props) {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}