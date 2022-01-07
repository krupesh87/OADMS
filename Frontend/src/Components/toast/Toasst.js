import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toasst = (props) => {

    let { type } = props;

    useEffect(() => {
        if (type === "success") {
            toast.success(props.toast);
        }
        else if (type === "info") {
            toast.info(props.toast);
        }
        else {
            toast.error(props.toast);
        }
    })

    return (
        <>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false} />
        </>
    )
}

export default Toasst
