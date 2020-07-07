import React from 'react';
import {
  withRouter
} from 'react-router-dom';

function HomeButton({history}) {
  return(
    <button onClick={() => console.log(history.push('/'))}>
        Click me
    </button>
  );  
}


export default withRouter(HomeButton);