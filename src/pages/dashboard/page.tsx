import { useState } from "react";
import { mockTasks, mockUser } from "../../features/task/mock-task-data";
import TaskList from "../../features/task/task-list";
import { TASK_STATUS } from "../../enums";
import TaskProgressSummary from "../../features/task/task-progress-summary";
import AppShell from "../../components/layout/app-shell";
import TaskCompletionText from "../../features/task/task-progress";

const DashboardPage = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchValue, setSearchValue] = useState("");

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

  const handleOnDelete = (taskId: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((item) => item.id !== taskId),
    );
  };

  const normalizedSearchValue = searchValue.trim().toLowerCase();
  const filterTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(normalizedSearchValue),
  );

  return (
    <AppShell
      avatarUrl={mockUser.avatarUrl}
      onSearchChange={setSearchValue}
      searchValue={searchValue}
      sidebarFooter={<TaskProgressSummary tasks={tasks} />}
      userName={mockUser.name}
    >
      <TaskCompletionText tasks={tasks} />
      <TaskList
        tasks={filterTasks}
        onToggle={handleToggle}
        onDelete={handleOnDelete}
      />
    </AppShell>
  );
};

export default DashboardPage;
