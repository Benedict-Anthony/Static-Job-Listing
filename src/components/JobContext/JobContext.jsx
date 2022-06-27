import { useState, createContext, useEffect } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filterd, setFiltered] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch("data.json");

    const data = await response.json();

    setJobs(data);
  };

  useEffect(function () {
    fetchJobs();
    // eslint-disable-next-line
  }, []);

  // STACK FILTER
  const stackFilter = (role) => {
    setJobs(
      jobs.filter(function (job) {
        setFiltered((prev) => {
          return [...filterd, role];
        });
        return job.role === role;
      })
    );
  };

  // LEVEL FILTER
  const levelFilter = (level) => {
    setFiltered((prev) => {
      return [...filterd, level];
    });
    setJobs(jobs.filter((job) => job.level === level));
  };

  // LANGUAGE FILTERS

  function languageFilter(language) {
    setFiltered((prev) => {
      return [...filterd, language];
    });
    setJobs(
      jobs.filter((job) => {
        return job.languages.includes(language);
      })
    );
  }

  // TOOLS FILTER

  const toolsFilter = (tool) => {
    setFiltered((prev) => {
      return [...filterd, tool];
    });
    setJobs(jobs.filter((job) => job.tools.includes(tool)));
  };

  function clearFilter() {
    fetchJobs();
    setFiltered([]);
  }

  // clear filtered filter

  const cancelFilter = (item) => {
    setFiltered(filterd.filter((filted) => filted !== item));
    setJobs(jobs.filter((job) => job.includes(item)));
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filterd,
        levelFilter,
        stackFilter,
        languageFilter,
        clearFilter,
        toolsFilter,
        cancelFilter,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
