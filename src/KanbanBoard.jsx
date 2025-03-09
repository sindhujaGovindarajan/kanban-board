import React, { useState } from "react";
import StageCard from "./components/StageCard";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const [stageTasks, setStageTasks] = useState({
    Backlog: ["task 1"],
    "To Do": ["task 2"],
    Review: ["task 3", "task 4"],
    Done: ["task 5"],
  });
  const handleStageChange = (task, stageFromPos, stageToPos) => {
    const temp = { ...stageTasks };
    const stages = Object.keys(stageTasks);
    const stageFrom = stages[stageFromPos];
    const stageTo = stages[stageToPos];
    // move task from stageFrom(splice by index) to stageTo(push)
    const findTaskIdx = temp[stageFrom].indexOf(task);
    temp[stageFrom].splice(findTaskIdx, 1);
    temp[stageTo].push(task);

    setStageTasks({ ...temp });
  };

  return (
    <div className="kanbanBoard">
      {Object.keys(stageTasks).map((stage, i) => (
        <StageCard
          key={stage + i}
          type={stage}
          position={i}
          tasks={stageTasks[stage]}
          stageChangeHandler={handleStageChange}
        />
      ))}
    </div>
  );
};
export default KanbanBoard;
