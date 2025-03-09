import "./StageCard.css";

const StageCard = ({ position, type, tasks, stageChangeHandler }) => {
  return (
    <div className="card stageCard">
      <h2 className="stageName">{type}</h2>
      <div className="tasksWrapper">
        {tasks.map((task, i) => {
          return (
            <div key={i} className="card taskCard">
              <h4 className="taskName">{task}</h4>
              <button
                disabled={type === "Backlog"}
                onClick={() => stageChangeHandler(task, position, position - 1)}
              >
                &lt;
              </button>
              <button
                disabled={type === "Done"}
                onClick={() => stageChangeHandler(task, position, position + 1)}
              >
                &gt;
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default StageCard;
