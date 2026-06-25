interface Props {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox = ({ checked, onChange, disabled = false }: Props) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(event) => onChange?.(event.target.checked)}
      className="h-4 w-4 rounded border-slate-300 accent-emerald-500"
    />
  );
};

export default Checkbox;
