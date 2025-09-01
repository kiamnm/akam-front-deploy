import {  toast } from "react-toastify";

export const successNotif=(msg)=>{
toast.success(msg, {
            position: "bottom-right",
          });
}

export const failNotif=(msg)=>{
toast.error(msg, {
            position: "bottom-right",
          });
}

