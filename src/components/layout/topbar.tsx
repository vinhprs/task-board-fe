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
            <svg
              aria-hidden="true"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m21 21-4.35-4.35M10.75 18.5a7.75 7.75 0 1 1 0-15.5 7.75 7.75 0 0 1 0 15.5Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>

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
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 7h16M7.5 12h9M10.5 17h3"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
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
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 9.75a6 6 0 1 0-12 0c0 7-2.25 7.75-2.25 7.75h16.5S18 16.75 18 9.75ZM14.25 20a2.5 2.5 0 0 1-4.5 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
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
