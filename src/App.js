import React from 'react';
import Landing from "./pages/landing/Landing";
import { Switch, Route } from 'react-router-dom';
import SearchPage from "./pages/search/SearchPage";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search-property" component={SearchPage} />
      </Switch>
    </>
  );
}

export default App;
