import React, { useState, useEffect, useContext } from "react";
import { FilterTagsContext } from "providers/FilterTagsProvider";
import Tag from "./common/Tag";
import "./FilteredJobTags.scss";

const FilteredJobTags = ({ selectedTags = [] }) => {
  const { setSelectedTags } = useContext(FilterTagsContext);
  const [filteredTags, setFilteredTags] = useState([]);

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
