import { useState } from "react"
import { useSelector } from 'react-redux';

function useFetch(url, options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const userToken = useSelector(state => state.auth.user.token);

  const fetchApi = async (data) => {
    setLoading(true);

    try {
      const response = await fetch(url, { ...options('35|vwM5NalCjgX4Gz0PHv6kTGvW63lV0SY0lzIfYvOF'), body: data });
      const resData = await response.json();
      console.log(resData)

      if (!response.ok) {
        throw resData.message;
      }
    console.log({...resData,ok:response.ok})
      return {...resData,ok:response.ok};
    } catch (errors) {
      setError(errors);
    } finally {
      setLoading(false);
    }
  };

  return { fetchApi, error, loading };
}

export default useFetch;