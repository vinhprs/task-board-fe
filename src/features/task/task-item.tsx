import { TASK_STATUS } from "../../enums";
import type { Category } from "../../types/category/category.type";
import Checkbox from "../../components/ui/checkbox";
import TaskCategoryBadge from "./task-category-badge";

interface Props {
  title: string;
  status: TASK_STATUS;
  category: Category;
  onToggle?: (checked: boolean) => void;
}

const TaskItem = ({ title, status, category, onToggle }: Props) => {
  const isCompleted = status === TASK_STATUS.COMPLETED;
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-slate-300 hover:shadow-sm transition">
      <Checkbox checked={isCompleted} onChange={onToggle} />

      <span
        className={`flex-1 text-sm ${isCompleted ? "text-slate-400 line-through" : "text-slate-950"} `}
      >
        {title}
      </span>

      <TaskCategoryBadge category={category} />
    </div>
  );
};

export default TaskItem;
