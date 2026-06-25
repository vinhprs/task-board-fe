import type { TASK_STATUS } from "../../enums";
import type { Category } from "../category/category.type";
import type { User } from "../user/user.type";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TASK_STATUS;
  user: User;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
