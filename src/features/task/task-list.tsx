import type { Task } from "../../types/task/task.type";
import TaskItem from "./task-item";

interface Props {
  tasks: Task[];
  onToggle: (taskId: string, checked: boolean) => void;
}

const TaskList = ({ tasks, onToggle }: Props) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          category={task.category}
          status={task.status}
          title={task.title}
          onToggle={(checked) => onToggle(task.id, checked)}
        />
      ))}
    </div>
  );
};

export default TaskList;
