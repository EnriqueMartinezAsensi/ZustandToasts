import { ToastData } from "../../types/toast.types";
import {
  FadeOutAnimation,
  ToastBody,
  ToastCloseButton,
  ToastContent,
  ToastProgressBar,
  ToastProgressBarContainer,
} from "./Toast.styled";

export type ToastProps = Omit<ToastData, "id"> & { onClose: () => void };

const Toast = ({ text, onClose, type, duration }: ToastProps) => {
  return (
    <FadeOutAnimation duration={duration || 0}>
      <ToastBody type={type}>
        <ToastContent>
          {text}
          <ToastCloseButton onClick={onClose}>X</ToastCloseButton>
        </ToastContent>
        {duration ? (
          <ToastProgressBarContainer>
            <ToastProgressBar duration={duration} />
          </ToastProgressBarContainer>
        ) : null}
      </ToastBody>
    </FadeOutAnimation>
  );
};

export default Toast;
