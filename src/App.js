import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter ,Route  } from 'react-router-dom'
import Single from './components/SingleStudent';
//import Student from './components/Student';

function App() {
  return (
    <div>
    <BrowserRouter >
       {/* <Home /> */}
      <Route  exact path='/true-exam' component={Home} />
      <Route  path='/student/:id'  component={Single}/>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
