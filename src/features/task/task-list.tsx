import type { Task } from "../../types/task/task.type";
import TaskItem from "./task-item";

interface Props {
  tasks: Task[];
  onToggle: (taskId: string, checked: boolean) => void;
  onDelete: (taskId: string) => void;
}

const TaskList = ({ tasks, onToggle, onDelete }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
        <p className="text-sm font-medium text-slate-900">No tasks found</p>
        <p className="mt-1 text-sm text-slate-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          category={task.category}
          status={task.status}
          title={task.title}
          onToggle={(checked) => onToggle(task.id, checked)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
