import { createPortal } from "react-dom";
import Toast from "../Toast";
import { Container } from "./ToastContainer.styled";
import { useToast } from "../../providers/ToastProviders/ToastContext/useToasts";

const ToastContainer = () => {
  const { toasts, deleteToast } = useToast();

  return createPortal(
    <Container>
      {toasts?.map((toasts) => (
        <Toast
          key={toasts.id}
          text={toasts.text}
          type={toasts.type}
          onClose={() => deleteToast(toasts.id)}
          duration={toasts.duration}
        />
      ))}
    </Container>,
    document.body
  );
};

export default ToastContainer;
