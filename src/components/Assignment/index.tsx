import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { TAssignment } from '../../App';

type Props = {
  assignment: TAssignment,
  onUpdateAssignment: (data: TAssignment) => void,
  onDeleteAssignment: (id: string) => void
}

export function Assignment({ assignment, onUpdateAssignment, onDeleteAssignment }: Props) {

  const [checkComplete, setCheckComplete] = useState(assignment.complete);

  const updateAssignment = () => {
    const newStatus = !checkComplete;
    setCheckComplete(newStatus);

    onUpdateAssignment({
      id: assignment.id,
      title: assignment.title,
      complete: newStatus
    })
  }

  const deleteAssignment = () => {
    onDeleteAssignment(assignment.id);
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={updateAssignment}>
        {checkComplete ? <BsCheckCircleFill /> : <div />}
      </button>

      <p className={checkComplete ? styles.textCompleted : ''}>{assignment.title}</p>

      <button className={styles.deleteButton} onClick={deleteAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
