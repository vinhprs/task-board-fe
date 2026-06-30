import Button from "../../components/ui/button";
import Modal from "../../components/ui/modal";
import TaskForm, { type TaskFormValues } from "./task-form";

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: TaskFormValues) => void;
}

const AddTaskModal = ({ open, onClose, onSubmit }: AddTaskModalProps) => {
  const formId = "add-task-form";

  return (
    <Modal
      footer={
        <>
          <Button onClick={onClose} variant="secondary">
            Cancel
          </Button>
          <Button form={formId} type="submit">
            Add task
          </Button>
        </>
      }
      onClose={onClose}
      open={open}
      title="Add new task"
    >
      <TaskForm formId={formId} onSubmit={onSubmit} />
    </Modal>
  );
};

export default AddTaskModal;
