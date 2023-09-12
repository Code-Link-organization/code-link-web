import { useContext } from "react";

function useCenterContent() {
  const context = useContext(CenterContentContext);

  return context;
}
 export default useCenterContent