import React, { useContext, useEffect } from "react";
import { navigate, useLocation } from "@reach/router";
import Layout from "./Layout";
import FilteredJobTags from "components/FilteredJobTags";
import FilteredJobCardsList from "components/FilteredJobCardsList";
import { FilterTagsContext } from "providers/FilterTagsProvider";

const JobsList = () => {
  const location = useLocation();
  const { selectedTags, setSelectedTags } = useContext(FilterTagsContext);

  const constructQueryParams = paramsList => {
    return `?filter=${paramsList.join(",")}`;
  };

  useEffect(() => {
    if (!selectedTags.length) {
      navigate("/");
    } else {
      const queryString = constructQueryParams(selectedTags);
      navigate(`/${queryString}`);
    }
  }, [selectedTags, selectedTags.length]);

  useEffect(() => {
    if (location.search) {
      const filterParams = new URLSearchParams(location.search);
      const filterParamsList =
        filterParams && filterParams.get("filter")
          ? filterParams.get("filter").split(",")
          : [];

      if (filterParamsList.length > 0) {
        setSelectedTags(filterParamsList);
      }
    } else {
      setSelectedTags([]);
    }
  }, [location.search, setSelectedTags]);

  return (
    <Layout>
      <div>
        <FilteredJobTags selectedTags={selectedTags} />
        <FilteredJobCardsList selectedTags={selectedTags} />
      </div>
    </Layout>
  );
};

export default JobsList;
