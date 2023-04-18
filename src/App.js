import logo from './logo.svg';
import './App.css';
//Function App return the Navigation and 
//LoginForm components that is inside the div 

import Navigation from './Nav'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <LoginForm />
    </div>
  );
}

export default App;

//Navigation is on top of the page
//LoginForm is in the bottom of ther page