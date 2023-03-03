import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showErrorMessage = (errorMessage) => {
  toast.error(errorMessage.toString(), {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showSuccessMessage = (errorMessage) => {
  toast.success(errorMessage.toString(), {
    position: toast.POSITION.TOP_RIGHT,
  });
};
