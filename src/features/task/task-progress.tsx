import type { Task } from "../../types/task/task.type";
import { TASK_STATUS } from "../../enums";

interface Props {
  tasks: Task[];
}

const TaskCompletionText = ({ tasks }: Props) => {
  const totalCount = tasks.length;
  const completedCount = tasks.filter(
    (task) => task.status === TASK_STATUS.COMPLETED,
  ).length;

  return (
    <p className="mt-2 mb-8 text-sm text-[#464554]">
      {completedCount} of {totalCount} tasks completed
    </p>
  );
};

export default TaskCompletionText;
