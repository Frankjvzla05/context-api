import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import SongsContextProvider from "./contexts/SongsContext";
import LiricsContextProvider from "./contexts/LyricsContext";
import './assets/css/styles.css';
import Header from "./components/Common/Header";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import NotFound from "./components/NotFound";

const App = () => (

  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <SongsContextProvider>
          <Songs />
        </SongsContextProvider>
      </Route>
      <Route patch="/lyrics/track/:commontrack_id">
        <LiricsContextProvider>
          <Lyrics /> 
        </LiricsContextProvider>
      </Route>
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
);



export default App;
