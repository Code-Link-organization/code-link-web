import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSavedUser } from "./store/user/userSlice";
import { router } from "./router/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      dispatch(setSavedUser(JSON.parse(userLogged)));
    }
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
