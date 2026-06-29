import EditIcon from "../../assets/icons/edit.svg";
import MarkAsCompleteIcon from "../../assets/icons/mark-as-complete.svg";
import DeleteIcon from "../../assets/icons/delete.svg";

interface Props {
  onDeleteTask: () => void;
  onMarkComplete: () => void;
}

const TaskActionMenu = ({ onDeleteTask, onMarkComplete }: Props) => {
  return (
    <div className="absolute right-4 top-12 z-20 w-44 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
      <button
        type="button"
        className="flex w-full items-center gap-2 px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
      >
        <img src={EditIcon} alt="" className="w-4 h-4" />
        Edit task
      </button>
      <button
        type="button"
        className="flex w-full items-center gap-2 px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
        onClick={onMarkComplete}
      >
        <img src={MarkAsCompleteIcon} alt="" className="w-4 h-4" />
        Mark as complete
      </button>

      <button
        type="button"
        className="flex w-full items-center gap-2 px-3 py-3 text-left text-sm text-red-600 hover:bg-red-50"
        onClick={onDeleteTask}
      >
        <img src={DeleteIcon} alt="" className="w-4 h-4" />
        Delete task
      </button>
    </div>
  );
};

export default TaskActionMenu;
