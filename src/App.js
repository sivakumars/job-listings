import React from "react";
import "./styles/main.scss";
import JobsList from "./pages/JobsList";
import FilterTagsProvider from "./providers/FilterTagsProvider";
import { Router } from "@reach/router";

function App() {
  return (
    <FilterTagsProvider>
      <Router>
        <JobsList path="/" />
      </Router>
    </FilterTagsProvider>
  );
}

export default App;
