import SearchIcon from "../../assets/icons/search.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
interface TopbarProps {
  userName: string;
  avatarUrl?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

const Topbar = ({
  userName,
  avatarUrl,
  searchValue = "",
  onSearchChange,
}: TopbarProps) => {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div className="flex min-w-0 flex-1 items-center gap-8">
        <h1 className="text-xl font-light text-slate-950">My tasks</h1>

        <div className="flex w-full max-w-md items-center gap-3">
          <div className="relative flex-1">
            <img
              src={SearchIcon}
              alt=""
              className="absolute left-3 top-1/3 h-4 w-4 "
            />

            <input
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              onChange={(event) => onSearchChange?.(event.target.value)}
              placeholder="Search tasks..."
              type="search"
              value={searchValue}
            />
          </div>

          <button
            className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            type="button"
          >
            <img src={FilterIcon} alt="" className="left-3 top-1/3 h-4 w-4 " />
            Filter
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          aria-label="Notifications"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          type="button"
        >
          <img src={NotificationIcon} alt="" className="h-4 w-4" />
        </button>

        <div className="h-8 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-950">{userName}</span>

          {avatarUrl ? (
            <img
              alt={userName}
              className="h-9 w-9 rounded-full object-cover"
              src={avatarUrl}
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              {userName.charAt(0)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
