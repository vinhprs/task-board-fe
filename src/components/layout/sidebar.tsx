import type { ReactNode } from "react";
import logoIcon from "../../assets/logo.svg";
import myTasksIcon from "../../assets/my-taks.svg";
import completedIcon from "../../assets/completed.svg";
import settingIcon from "../../assets/setting.svg";

interface SidebarProps {
  footer?: ReactNode;
}

const Sidebar = ({ footer }: SidebarProps) => {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col justify-between bg-slate-950 px-4 py-5 text-white">
      <div>
        <div className="mb-8 flex items-center gap-2">
          <img src={logoIcon} alt="h-8 w-8" />
          <span className="text-sm font-semibold">TaskBoard</span>
        </div>

        <nav className="space-y-2">
          <button className="flex w-full items-center gap-3 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium">
            <img src={myTasksIcon} alt="h-4 w-4" />
            My tasks
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5">
            <img src={completedIcon} alt="h-4 w-4" />
            Completed
          </button>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5">
            <img src={settingIcon} alt="h-4 w-4" />
            Settings
          </button>
        </nav>
      </div>

      {footer}
    </aside>
  );
};

export default Sidebar;
