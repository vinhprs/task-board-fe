import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface AppShellProps {
  children: ReactNode;
  sidebarFooter?: ReactNode;
}

const AppShell = ({ children, sidebarFooter }: AppShellProps) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar footer={sidebarFooter} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-8 py-6">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;
