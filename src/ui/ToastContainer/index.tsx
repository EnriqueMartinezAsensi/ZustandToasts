import { createPortal } from "react-dom";
import Toast from "../Toast";
import { Container } from "./ToastContainer.styled";
import useToastsStore from "../../store/toastsStore";

const ToastContainer = () => {
  const { toasts, deleteToast } = useToastsStore();

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
