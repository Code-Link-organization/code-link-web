import { useState } from "react"
import { useSelector } from 'react-redux';
import { toastEmitter } from "../Functions/toastEmitter";

function useFetch(url, options,request) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const user = useSelector(state => state.auth).user

  const fetchApi = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options(user?.token), body: data });
      const resData = await response.json();
      console.log(resData)

      if (!response.ok) {
            toastEmitter(resData.message)
        throw resData.message;
      }
      if(!request)
    toastEmitter(resData.message)
      return {...resData,ok:response.ok};
    } catch (errors) {
      console.log(errors)
      setError(errors);
    } finally {
      setLoading(false);
    }
  };

  return { fetchApi, error, loading };
}

export default useFetch;