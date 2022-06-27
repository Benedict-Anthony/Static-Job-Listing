import React from "react";

function ListItem({
  job,
  stackFilter,
  levelFilter,
  languageFilter,
  toolsFilter,
}) {
  return (
    <>
      <li className={`user-list ${job.featured && "highlight"}`}>
        <div className="user-list__info">
          <div className="user-list__img">
            <img src={job.logo} alt="" />
          </div>
          <div className="user-list__text">
            <span className="company">{job.company} </span>
            {job.new && <span className="status">New!</span>}
            {job.featured && <span className="featured">Featured</span>}
            <div>
              <p className="position">{job.position}</p>
              <span className="active">{job.postedAt}</span>
              <span className="contract">{job.contract}</span>
              <span className="location">{job.location}</span>
            </div>
          </div>
        </div>

        <div className="user-list__skills">
          <span className="languages" onClick={() => stackFilter(job.role)}>
            {job.role}
          </span>
          <span className="languages" onClick={() => levelFilter(job.level)}>
            {job.level}
          </span>

          {job.languages.map((language, index) => (
            <span
              key={index + 1}
              className="languages"
              onClick={() => languageFilter(language)}
            >
              {language}
            </span>
          ))}
          {job.tools.map((tool, index) => (
            <span
              key={index + 1}
              className="languages"
              onClick={() => toolsFilter(tool)}
            >
              {tool}
            </span>
          ))}
        </div>
      </li>
    </>
  );
}

export default ListItem;
