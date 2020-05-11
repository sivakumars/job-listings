import React, { useContext } from "react";
import "./JobCard.scss";
import Tag from "./common/Tag";
import { FilterTagsContext } from "providers/FilterTagsProvider";

const JobCard = ({ job }) => {
  const { selectedTags, setSelectedTags } = useContext(FilterTagsContext);

  const onSelectTagHandler = e => {
    const tagData = e.target.dataset["tag"];
    const uniqueTagSet = new Set([...selectedTags, tagData]);
    setSelectedTags(Array.from(uniqueTagSet));
  };

  return (
    <div className="box-l job-container">
      <div className="switcher-l">
        <div>
          <div className="sidebar-l">
            <div className="job-details-container">
              <div className="flex-sidebar">
                <img src={job.logo} className="logo" alt="company logo" />
              </div>
              <div className="flex-grow stack-l job-details">
                <p className="company">
                  <span>{job.company}</span>
                  {job.new ? (
                    <span className="badge badge--new">new!</span>
                  ) : null}
                  {job.featured ? (
                    <span className="badge badge--featured">featured</span>
                  ) : null}
                </p>
                <p className="position">{job.position}</p>
                <p className="location">
                  <span>{job.postedAt}</span>
                  <span>&#8226;</span>
                  <span>{job.contract}</span>
                  <span>&#8226;</span>
                  <span>{job.location}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="jobTags width-40pc">
            <div className="cluster-l">
              <div>
                {job.tags.length > 0
                  ? job.tags.map((jobTag, idx) => {
                      return (
                        <span key={idx} className="jobTags__tag">
                          <Tag name={jobTag} onTagClick={onSelectTagHandler} />
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
