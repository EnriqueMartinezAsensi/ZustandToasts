import { useDispatch, useSelector } from "react-redux";
import { addToast, removeToast } from "../store/toastsStore/actions";
import { ToastData } from "../types/toast.types";

const UseToasts = () => {
  const toasts = useSelector((state: ToastStoreValue) => state.toasts);
  const dispatch = useDispatch();

  const addNewToast = (toast: ToastData) => {
    dispatch(addToast(toast));
    setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, toast.duration);
  };

  const deleteToast = (id: number) => {
    dispatch(removeToast(id));
  };

  return { toasts, addNewToast, deleteToast };
};

export default UseToasts;
