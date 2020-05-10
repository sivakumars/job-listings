import React, { useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import Layout from "./Layout";
import FilteredJobTags from "components/FilteredJobTags";
import FilteredJobCardsList from "components/FilteredJobCardsList";
import { FilterTagsContext } from "providers/FilterTagsProvider";

const JobsList = () => {
  const { selectedTags } = useContext(FilterTagsContext);

  const constructQueryParams = paramsList => {
    return `?filter=${paramsList.join(",")}`;
  };

  useEffect(() => {
    if (!selectedTags.length) {
      console.log("Selected Tags Empty", selectedTags);
      navigate("/");
    } else {
      const queryString = constructQueryParams(selectedTags);
      navigate(`/${queryString}`);
    }
  }, [selectedTags, selectedTags.length]);

  return (
    <Layout>
      <div className="stack-lg-l negative-margin-2">
        <FilteredJobTags />
        <FilteredJobCardsList />
      </div>
    </Layout>
  );
};

export default JobsList;
