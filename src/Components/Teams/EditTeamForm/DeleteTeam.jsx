/* eslint-disable react/prop-types */
/* eslint-disable no-empty */
import { useDispatch } from 'react-redux';
import { api } from '../../../api';
import useFetch from '../../../CustomHooks/useFetch';
import { postOptions } from '../../../options';
import { deleteTeam } from '../../../store/teams/teamsSlice';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';

function DeleteTeam({ team }) {
  const { fetchApi: deleteTeamFetch, loading } = useFetch(
    `${api}/teams/delete/${team?.id}`,
    postOptions
  );
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const deleteHandler = async () => {
    if (window.confirm('Are you sure you want to delete this team?')) {
      const resData = await deleteTeamFetch();
      if (resData.ok) {
        dispatch(deleteTeam(team.id));
        navigate('/teams');

      }
    }
  };

  return (
    <>
      {!loading ? (
        <button
          onClick={deleteHandler}
          className="w-[60px] h-[30px] bg-[rgba(217,198,164,1)] rounded-[10px] element-center text-xs block hover:opacity-50 transition-all duration-300 mx-auto"
        >
          Delete
        </button>
      ) : (
        <ReactLoading
          className="mx-auto"
          type="spin"
          color="#D9C6A4"
          height={50}
          width={50}
        />
      )}
    </>
  );
}

export default DeleteTeam;
