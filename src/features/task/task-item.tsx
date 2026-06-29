import { useState } from "react";

import { TASK_STATUS } from "../../enums";
import type { Category } from "../../types/category/category.type";
import Checkbox from "../../components/ui/checkbox";
import TaskCategoryBadge from "./task-category-badge";
import DotsIcon from "../../assets/icons/dots.svg";
import TaskActionMenu from "./task-action-menu";

interface Props {
  title: string;
  status: TASK_STATUS;
  category: Category;
  onToggle?: (checked: boolean) => void;
  onDelete: () => void;
}

const TaskItem = ({ title, status, category, onToggle, onDelete }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isCompleted = status === TASK_STATUS.COMPLETED;

  return (
    <div className="relative flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-slate-300 hover:shadow-sm transition">
      <Checkbox checked={isCompleted} onChange={onToggle} />

      <span
        className={`flex-1 text-sm ${isCompleted ? "text-slate-400 line-through" : "text-slate-950"} `}
      >
        {title}
      </span>

      <TaskCategoryBadge category={category} />

      <button
        type="button"
        aria-label="Task actions"
        className={`flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100 ${
          isMenuOpen ? "bg-slate-100" : ""
        }`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <img src={DotsIcon} alt="" className="h-4 w-4" />
      </button>

      {isMenuOpen && (
        <TaskActionMenu
          onDeleteTask={onDelete}
          onMarkComplete={() => onToggle?.(true)}
        />
      )}
    </div>
  );
};

export default TaskItem;
