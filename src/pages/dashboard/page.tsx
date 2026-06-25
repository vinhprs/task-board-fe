import { useState } from "react";
import { mockTasks } from "../../features/task/mock-task-data";
import TaskList from "../../features/task/task-list";
import { TASK_STATUS } from "../../enums";
import TaskProgressSummary from "../../features/task/task-progress-summary";

const DashboardPage = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const handleToggle = (taskId: string, checked: boolean) => {
    setTasks((currentTasks) =>
      currentTasks.map((item) =>
        item.id === taskId
          ? {
              ...item,
              status: checked ? TASK_STATUS.COMPLETED : TASK_STATUS.PENDING,
            }
          : item,
      ),
    );
  };

  return (
    <>
      <TaskList tasks={tasks} onToggle={handleToggle} />
      <TaskProgressSummary tasks={tasks} />
    </>
  );
};

export default DashboardPage;
