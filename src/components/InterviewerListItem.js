import React from "react";

import "components/InterviewerListItem.scss";

import classnames from "classnames";

const InterviewerListItem = function(props) {
  const interviewerItemClass = classnames("interviewers__item", {
    "interviewers__item--selected" : props.selected
  });

  return (
    <li className={interviewerItemClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
};

export default InterviewerListItem;
