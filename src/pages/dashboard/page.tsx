import { useState } from "react";
import {
  mockCategories,
  mockTasks,
  mockUser,
} from "../../features/task/mock-task-data";
import TaskList from "../../features/task/task-list";
import { TASK_STATUS } from "../../enums";
import TaskProgressSummary from "../../features/task/task-progress-summary";
import AppShell from "../../components/layout/app-shell";
import TaskCompletionText from "../../features/task/task-progress";
import Button from "../../components/ui/button";
import AddTaskModal from "../../features/task/add-task-modal";
import type { Task } from "../../types/task/task.type";
import type { TaskFormValues } from "../../features/task/task-form";

const DashboardPage = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchValue, setSearchValue] = useState("");
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

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

  const handleOnSubmitCreate = (values: TaskFormValues) => {
    const category = mockCategories.find(
      (category) => category.key === values.categoryKey,
    );

    if (!category) return;
    const now = new Date();

    const newTask: Task = {
      id: crypto.randomUUID(),
      ...values,
      status: TASK_STATUS.PENDING,
      user: mockUser,
      category,
      createdAt: now,
      updatedAt: now,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setIsAddTaskModalOpen(false);
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
      <div className="mb-6 flex items-center justify-between gap-4">
        <TaskCompletionText tasks={tasks} />
        <Button onClick={() => setIsAddTaskModalOpen(true)}>+ Add task</Button>
      </div>

      <TaskList
        tasks={filterTasks}
        onToggle={handleToggle}
        onDelete={handleOnDelete}
      />

      <AddTaskModal
        onClose={() => setIsAddTaskModalOpen(false)}
        open={isAddTaskModalOpen}
        onSubmit={handleOnSubmitCreate}
      />
    </AppShell>
  );
};

export default DashboardPage;
