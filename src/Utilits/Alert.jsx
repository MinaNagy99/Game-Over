import { toast } from "react-toastify";

   
   
   export  const notify = (text,type) => toast[type] (`${text}`);
    