import { api } from "../../api"
import useFetch from "../../CustomHooks/useFetch"

function SearcQuery(type,keyword) {
  const {fetchApi:setSearch,loading:searchLoading}=useFetch(`${api}/search/${type}?query=${keyword}`)
  return {
    setSearch,
    searchLoading
  }

}

export default SearcQuery