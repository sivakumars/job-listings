import React, { useContext } from "react";
import "./Tag.scss";
import { FilterTagsContext } from "providers/FilterTagsProvider";

const Tag = ({ name, cross = false, onTagClick = () => {} }) => {
  const { removeSelectedTag } = useContext(FilterTagsContext);

  const onRemoveSelectedTag = e => {
    removeSelectedTag(e.target.dataset["tag"]);
  };

  return (
    <div className={cross ? `tag` : `tag pad-right-5`}>
      <span data-tag={name} onClick={onTagClick}>
        {name}
      </span>
      {cross && (
        <span className="cross" data-tag={name} onClick={onRemoveSelectedTag}>
          x
        </span>
      )}
    </div>
  );
};

export default Tag;
