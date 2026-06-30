import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  footer?: ReactNode;
  open: boolean;
  title: string;
  onClose: () => void;
}

const Modal = ({ children, footer, open, title, onClose }: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
      <div className="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-semibold text-slate-950">{title}</h2>

          <button
            aria-label="Close modal"
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
            onClick={onClose}
            type="button"
          >
            x
          </button>
        </div>

        <div className="px-6 py-6">{children}</div>

        {footer ? (
          <div className="flex justify-end gap-3 bg-indigo-50/60 px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
