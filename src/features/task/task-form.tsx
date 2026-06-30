export interface TaskFormValues {
  title: string;
  description: string;
  categoryKey: string;
}

interface TaskFormProps {
  formId?: string;
  onSubmit?: (values: TaskFormValues) => void;
}

const TaskForm = ({ formId = "task-form", onSubmit }: TaskFormProps) => {
  return (
    <form
      className="space-y-5"
      id={formId}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const values: TaskFormValues = {
          title: String(formData.get("title") ?? ""),
          description: String(formData.get("description") ?? ""),
          categoryKey: String(formData.get("categoryKey") ?? ""),
        };

        onSubmit?.(values);
      }}
    >
      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="task-title"
        >
          Title
        </label>
        <input
          className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          id="task-title"
          name="title"
          placeholder="e.g. Write unit tests for login endpoint"
          type="text"
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="task-description"
        >
          Description
        </label>
        <textarea
          className="min-h-24 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          id="task-description"
          name="description"
          placeholder="Add more details (optional)"
        />
      </div>

      <div>
        <label
          className="mb-2 block text-sm font-medium text-slate-700"
          htmlFor="task-category"
        >
          Category
        </label>
        <select
          className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          id="task-category"
          name="categoryKey"
        >
          <option value="">Select category</option>
          <option value="backend">Backend</option>
          <option value="testing">Testing</option>
          <option value="frontend">Frontend</option>
          <option value="ui">UI</option>
        </select>
      </div>
    </form>
  );
};

export default TaskForm;
