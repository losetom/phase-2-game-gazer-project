import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GameForm from "./components/GameForm";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import GamesList from "./components/GamesList"

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/gameData")
      .then(r => r.json())
      .then(data => setGames(data))
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={ "/" } >
        <Home />
        </Route>
      <Route exact path={ "/gameform" } >
       <GameForm />
       </Route>
       <Route exact path={ "/games" } >
        <GamesList games={ games } />
       </Route>
      </Switch>
    </Router>
    
  )
}

export default App;