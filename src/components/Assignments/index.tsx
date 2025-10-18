import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { TAssignment } from "../../App";

type Props = {
  assignments: TAssignment[],
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
}

export function Assignments({ assignments, setAssignments }: Props) {
  const completedCount = assignments.filter(data => data.complete);

  const handleUpdate = (aData: TAssignment) => {
    setAssignments((assignment) =>
      assignment.map((data) => data.id === aData.id ? aData : data)
    )
  }

  const handleDelete = (id: string) => {
    setAssignments(prevAssignments =>
      prevAssignments.filter(data => data.id !== id))
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completedCount.length} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignmentData) => (
          <Assignment key={assignmentData.id} assignment={assignmentData} onUpdateAssignment={handleUpdate}
            onDeleteAssignment={() => handleDelete(assignmentData.id)} />
        ))}

      </div>
    </section>
  );
}
