import React, { useState, useEffect, useContext } from "react";
//import { useLocation } from "@reach/router";

import "./FilteredJobTags.scss";
import Tag from "./common/Tag";
import { FilterTagsContext } from "providers/FilterTagsProvider";

const FilteredJobTags = ({ selectedTags = [] }) => {
  //const location = useLocation();
  const { setSelectedTags } = useContext(FilterTagsContext);
  const [filteredTags, setFilteredTags] = useState([]);

  // useEffect(() => {
  //   let filterParams = new URLSearchParams(location.search);
  //   let filterTags = filterParams.get("filter")
  //     ? filterParams.get("filter").split(",")
  //     : [];
  //   setFilteredTags(filterTags);
  // }, [location.search]);

  useEffect(() => {
    if (selectedTags.length > 0) {
      setFilteredTags(selectedTags);
    } else {
      setFilteredTags([]);
    }
  }, [selectedTags, selectedTags.length]);

  return (
    <div className="box-l switcher-l tags-container">
      <div>
        <div className="cluster-l min-width-90">
          {filteredTags.length > 0 ? (
            <div>
              {filteredTags.map((filteredTag, idx) => {
                return <Tag name={filteredTag} cross={true} key={idx} />;
              })}
            </div>
          ) : (
            <div>
              <p className="placeholder">Select a tag in the Job to filter</p>
            </div>
          )}
        </div>
        {filteredTags.length > 0 ? (
          <div className="clearTags" onClick={() => setSelectedTags([])}>
            Clear
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilteredJobTags;
