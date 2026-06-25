import { TASK_STATUS } from "../../enums";
import type { Category } from "../../types/category/category.type";
import type { Task } from "../../types/task/task.type";
import type { User } from "../../types/user/user.type";

const now = new Date("2026-06-25T09:00:00.000Z");

export const mockUser: User = {
  id: "user-1",
  name: "Vinh Nguyen",
  email: "vinh.nguyen@example.com",
  avatarUrl: "https://i.pravatar.cc/80?img=12",
  createdAt: now,
  updatedAt: now,
};

export const mockCategories: Category[] = [
  {
    id: "category-1",
    key: "backend",
    name: "Backend",
    color: "yellow",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "category-2",
    key: "testing",
    name: "Testing",
    color: "green",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "category-3",
    key: "frontend",
    name: "Frontend",
    color: "indigo",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "category-4",
    key: "ui",
    name: "UI",
    color: "purple",
    createdAt: now,
    updatedAt: now,
  },
];

const backendCategory = mockCategories[0];
const testingCategory = mockCategories[1];
const frontendCategory = mockCategories[2];
const uiCategory = mockCategories[3];

export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Setup Express backend with JWT auth",
    description:
      "Create auth endpoints and protect task routes with JWT middleware.",
    status: TASK_STATUS.PENDING,
    user: mockUser,
    category: backendCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-2",
    title: "Write unit tests for task routes",
    description: "Cover create, update, delete, and ownership checks.",
    status: TASK_STATUS.PENDING,
    user: mockUser,
    category: testingCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-3",
    title: "Connect React Query to /tasks endpoint",
    description:
      "Replace mock data with useQuery after the API layer is ready.",
    status: TASK_STATUS.PENDING,
    user: mockUser,
    category: frontendCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-4",
    title: "Design UI for Task Board",
    description: "Match the dashboard, task row, and modal spacing from Figma.",
    status: TASK_STATUS.PENDING,
    user: mockUser,
    category: uiCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-5",
    title: "Implement Dark Mode toggle",
    description: "Add theme state and persist the selected mode.",
    status: TASK_STATUS.COMPLETED,
    user: mockUser,
    category: uiCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-6",
    title: "Optimize database queries",
    description:
      "Add indexes and avoid loading tasks that do not belong to the user.",
    status: TASK_STATUS.COMPLETED,
    user: mockUser,
    category: backendCategory,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "task-7",
    title: "Deploy to staging environment",
    description: "Prepare environment variables and verify the staging build.",
    status: TASK_STATUS.COMPLETED,
    user: mockUser,
    category: backendCategory,
    createdAt: now,
    updatedAt: now,
  },
];
