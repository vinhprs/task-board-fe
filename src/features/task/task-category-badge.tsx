import Badge from "../../components/ui/badge";
import type { Category } from "../../types/category/category.type";

interface TaskCategoryBadgeProps {
  category: Category;
}

const categoryStyles: Record<string, string> = {
  backend: "bg-amber-100 text-amber-700",
  testing: "bg-emerald-100 text-emerald-700",
  frontend: "bg-indigo-100 text-indigo-700",
  ui: "bg-violet-100 text-violet-700",
};

const TaskCategoryBadge = ({ category }: TaskCategoryBadgeProps) => {
  const className =
    categoryStyles[category.key] ?? "bg-slate-100 text-slate-600";

  return <Badge className={className}>{category.name}</Badge>;
};

export default TaskCategoryBadge;
