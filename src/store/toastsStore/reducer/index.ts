const initalState: ToastStoreValue = {
  toasts: [],
};

const toastReducer = (state = initalState, action: ToastStoreAction) => {
  if (action.type === "toasts/addToast") {
    return {
      ...state,
      toasts: [...state.toasts, action.payload],
    };
  }
  if (action.type === "toasts/removeToast") {
    return {
      ...state,
      toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
    };
  }
  return state;
};

export default toastReducer;
