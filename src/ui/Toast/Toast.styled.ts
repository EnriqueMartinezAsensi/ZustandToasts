import styled, { keyframes } from "styled-components";
import { ToastType } from "../../types/toast.types";

const progressAnimation = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
`;

const entranceAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const ANIMATION_DURATION = 500;

const getBackgroundColor = (type: ToastType) => {
  const backgroundColors = {
    NORMAL: "green",
    ERROR: "red",
    WARNING: "orange",
  };

  return backgroundColors[type];
};

export const ToastBody = styled.div<{ type: ToastType }>`
  background-color: ${({ type }) => getBackgroundColor(type)};
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #fff;

  animation: ${entranceAnimation} ${ANIMATION_DURATION}ms cubic-bezier(0.59, 0.02, 0.71, 1.24);
`;

export const FadeOutAnimation = styled.div<{ duration: number }>`
  animation: ${entranceAnimation} ${ANIMATION_DURATION}ms cubic-bezier(0.59, 0.02, 0.76, 0.78);
  animation-direction: reverse;
  animation-delay: ${({ duration }) => duration - 450}ms;
`;

export const ToastContent = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: baseline;
`;

export const ToastCloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  aspect-ratio: 1;
  padding: 0;
`;

export const ToastProgressBarContainer = styled.div`
  width: 90%;
  height: 0.25rem;
`;

export const ToastProgressBar = styled.div<{ duration: number }>`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  animation: ${progressAnimation} ${({ duration }) => duration}ms linear;
`;
