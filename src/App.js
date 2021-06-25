import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import UserDetails from './components/UserDetails'
import CommentPrompt from './components/CommentPrompt';
import LoginPrompt from './components/LoginPrompt';
import { useState } from 'react';
function App() {
  const [log, setLog] = useState(false);
  function LoginRouter() {
    const history = useHistory();
  
    function Verify(user, password) {
      if (user === "Alan" && password === "123") {
        setLog(true)
        history.push("/");
      }else {
        alert("username or password is incorrect!")
      }
    }
    return <LoginPrompt isLoggedIn={log} onSubmit={Verify}/>;
  }
  function LoginCheck(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserDetails loggedIn={true}/>;
    }
    return <UserDetails loggedIn={false}/>;
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <LoginRouter />
            </Route>
            <Route path="/">
              <LoginCheck isLoggedIn={log}/>
            </Route>
          </Switch>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}
// function LoginRouter() {
//   const history = useHistory();

//   function Verify(user, password) {
//     console.log(user, password)
//     if (user === "Alan" && password === "123") {
//       // setLog(loggedIn=true)
//       loggedIn = true;
//       console.log(loggedIn)
//       history.push("/");
//     }
//   }
//   return <LoginPrompt onSubmit={Verify}/>;
// }
// function LoginCheck(props) {
//   console.log(loggedIn)
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserDetails loggedIn={true}/>;
//   }
//   return <UserDetails loggedIn={false}/>;
// }
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

export default App;
