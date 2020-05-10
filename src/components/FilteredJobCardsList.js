import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";

import JobsListData from "./../config";
import JobCard from "./JobCard";
import "./FilteredJobCardsList.scss";

const FilteredJobCardsList = () => {
  const location = useLocation();
  const [jobData, setJobData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const getJobsWithTags = jobsList => {
    let jobsListWithTags = jobsList.map(job => {
      const languages = job["languages"] ? job["languages"] : [];
      const tools = job["tools"] ? job["tools"] : [];
      return {
        ...job,
        tags: [...languages, ...tools]
      };
    });

    return jobsListWithTags;
  };

  const displayFilteredJobs = selectedJobsList => {
    const filteredJobs = jobData.filter(displayedJob => {
      return displayedJob.tags.some(jobTag => {
        return selectedJobsList.includes(jobTag);
      });
    });
    setFilteredJobs([...filteredJobs]);
  };

  useEffect(() => {
    let jobsListWithTags =
      JobsListData.length > 0 ? getJobsWithTags(JobsListData) : [];
    setJobData(jobsListWithTags);
    setFilteredJobs(jobsListWithTags);
  }, []);

  useEffect(() => {
    if (location.search) {
      const filterParams = new URLSearchParams(location.search);
      const filterParamsList =
        filterParams && filterParams.get("filter")
          ? filterParams.get("filter").split(",")
          : [];

      if (filterParamsList.length > 0) {
        displayFilteredJobs(filterParamsList);
      }
    } else {
      console.log("No tags selected", jobData);
    }
  }, [location.search]);

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
