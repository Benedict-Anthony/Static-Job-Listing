import React from "react";
import { useContext } from "react";

import ListItem from "./ListItem";
import Filterbar from "./Filterbar";
import JobContext from "./JobContext/JobContext";

function ListItems() {
  const {
    jobs,
    stackFilter,
    levelFilter,
    languageFilter,
    toolsFilter,
    filterd,
    cancelFilter,
    clearFilter,
  } = useContext(JobContext);

  return (
    <ul className="container">
      {filterd.length > 0 && (
        <div className="filterBar">
          <>
            {filterd.map((item, index) => (
              <Filterbar item={item} key={index} cancelFilter={cancelFilter} />
            ))}
          </>
          <button className="btn" onClick={clearFilter}>
            Clear
          </button>
        </div>
      )}
      <div className="job-lists">
        {jobs.map((job) => (
          <ListItem
            job={job}
            key={job.id}
            stackFilter={stackFilter}
            levelFilter={levelFilter}
            languageFilter={languageFilter}
            toolsFilter={toolsFilter}
          />
        ))}
      </div>
    </ul>
  );
}

export default ListItems;
