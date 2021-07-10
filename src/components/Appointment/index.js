import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";


export default function Appointment(props) {
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(res => {
      transition(SHOW);
    })
    
  }
  function deleteInterview(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    }
    transition(DELETING);
    props.cancelInterview(props.id, interview)
    .then(() => transition(EMPTY))

  }
  
  function editSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(res => {
      transition(SHOW);
    })
    
  }
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
          
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onCancel={() => back()}
          onSave={save}
          />
      )}
      {mode === SAVING && (
        <Status
          message="Saving"
          />
      )}
      {mode === DELETING && (
        <Status
          message="Deleting"
          />
      )}
       {mode === CONFIRM && (
        <Confirm 
          message="Are you sure you want to delete?" onCancel={back} onConfirm={deleteInterview}
          />
       )}
        {mode === EDIT && (
          <Form 
            name={props.interview.student} 
            interviewers={props.interviewers} 
            interviewer={props.interview.interviewer.id} 
            onCancel={back} 
            onSave={editSave} 
        />
        )}
    </article>
  );
}
