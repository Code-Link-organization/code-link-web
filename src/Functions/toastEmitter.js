import { toast } from 'react-toastify';

export const toastEmitter = (msg, type = 'success') => {
    console.log(msg)
  if (type === 'success') {
    console.log(msg,type)
    toast.success(msg, {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });}
    else if(type==='error'){
    toast.error('msg', {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });        
    
  }
};