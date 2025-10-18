import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { TAssignment } from "../../App";

type HeaderProps = {
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>
}

export function Header({ setAssignments }: HeaderProps) {
  const [button, setButton] = useState(true);
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (e.target.value.trim().length > 0) setButton(false)
    else setButton(true)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setAssignments((assignments) => {
      return [...assignments, {
        id: crypto.randomUUID(),
        title: text,
        complete: false
      }];
    });
    setText("");
    setButton(true);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input placeholder="Add a new assignment"
          type="text"
          value={text}
          onChange={handleChange} />

        <button disabled={button}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
