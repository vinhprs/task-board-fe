import type { Task } from "../../types/task/task.type";
import { TASK_STATUS } from "../../enums";

interface Props {
  tasks: Task[];
}

const TaskProgressSummary = ({ tasks }: Props) => {
  const totalCount = tasks.length;
  const completedCount = tasks.filter(
    (task) => task.status === TASK_STATUS.COMPLETED,
  ).length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="rounded-lg bg-indigo-950/40 p-4 text-white">
      <p className="text-sm font-medium">Workspace usage</p>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-indigo-900">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <p className="mt-2 text-xs text-indigo-200">
        {completedCount} of {totalCount} tasks completed
      </p>
    </div>
  );
};

export default TaskProgressSummary;
