import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotification = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            limit={3}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
            closeButton={false}
            bodyClassName={'p-0'}
            className={'p-0 min-h-5 py-0'}
        />
    );
};

export default ToastNotification;
