import React, { useState, useEffect } from "react";

import JobsListData from "./../config";
import JobCard from "./JobCard";
import "./FilteredJobCardsList.scss";

const FilteredJobCardsList = ({ selectedTags = [] }) => {
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const getJobsWithTags = jobsList => {
    let jobsListWithTags = jobsList.map(job => {
      const languages = job["languages"] ? job["languages"] : [];
      const tools = job["tools"] ? job["tools"] : [];
      const role = job["role"];
      const level = job["level"];
      return {
        ...job,
        tags: [role, level, ...languages, ...tools]
      };
    });

    return jobsListWithTags;
  };

  const displayFilteredJobs = selectedJobsList => {
    if (selectedJobsList.length === 0) {
      setFilteredJobs([...jobData]);
    } else {
      // The following code filters jobs with at least one of the selected tags
      // const filteredJobs = jobData.filter(displayedJob => {
      //   return displayedJob.tags.some(jobTag => {
      //     return selectedJobsList.includes(jobTag);
      //   });
      // });
      // The following code filters jobs with  the combination of the selected tags
      const filteredJobs = jobData.filter(displayedJob => {
        return selectedJobsList.every(jobTag => {
          return displayedJob.tags.includes(jobTag);
        });
      });
      setFilteredJobs([...filteredJobs]);
    }
  };

  useEffect(() => {
    let jobsListWithTags =
      JobsListData.length > 0 ? getJobsWithTags(JobsListData) : [];
    setJobData(jobsListWithTags);
    setFilteredJobs(jobsListWithTags);
  }, []);

  useEffect(() => {
    if (selectedTags.length > 0) {
      displayFilteredJobs(selectedTags);
    } else {
      displayFilteredJobs([]);
    }
  }, [selectedTags, selectedTags.length]);

  return (
    <div className="stack-l">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((displayedJob, idx) => {
          return <JobCard job={displayedJob} key={idx} />;
        })
      ) : (
        <p className="no-jobs">No jobs Listed! Check again soon.</p>
      )}
    </div>
  );
};

export default FilteredJobCardsList;
