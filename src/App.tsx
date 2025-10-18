import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

export type TAssignment = {
  id: string,
  title: string,
  complete: boolean
}

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([
    { id: '1', title: 'Some Assignment 1', complete: true },
    { id: '2', title: 'Some Assignment 2', complete: false },
    { id: '3', title: 'Some Assignment 3', complete: false }
  ]);

  return (
    <>
      <Header setAssignments={setAssignments} />
      <Assignments assignments={assignments} setAssignments={setAssignments} />
    </>
  );
}

export default App;
