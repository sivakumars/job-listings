import React from "react";
import "./styles/main.scss";
import JobsList from "./pages/JobsList";
import FilterTagsProvider from "./providers/FilterTagsProvider";
import { Router, LocationProvider } from "@reach/router";

function App() {
  return (
    <LocationProvider>
      <FilterTagsProvider>
        <Router>
          <JobsList path="/" />
        </Router>
      </FilterTagsProvider>
    </LocationProvider>
  );
}

export default App;
