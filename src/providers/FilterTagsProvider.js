import React, { useState, useMemo } from "react";

export const FilterTagsContext = React.createContext();

const FilterTagsProvider = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const removeSelectedTag = deleteTag => {
    const updatedTags = selectedTags.filter(tag => tag !== deleteTag);
    setSelectedTags([...updatedTags]);
  };

  const value = useMemo(() => {
    return {
      selectedTags,
      setSelectedTags,
      removeSelectedTag
    };
  }, [selectedTags]);

  return (
    <FilterTagsContext.Provider value={value}>
      {children}
    </FilterTagsContext.Provider>
  );
};

export default FilterTagsProvider;
