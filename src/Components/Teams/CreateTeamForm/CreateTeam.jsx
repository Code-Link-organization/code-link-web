/* eslint-disable react/prop-types */
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import useFetch from '../../../CustomHooks/useFetch';
import { toastEmitter } from '../../../Functions/toastEmitter';
import { toFormData } from '../../../Functions/toFormData';
import { postOptions } from '../../../options';
import { addTeam} from '../../../store/teams/teamsSlice';

function CreateTeam({  teamForm, setTeamForm }) {
  const { fetchApi: createTeamFetch, loading } = useFetch(
    `${api}/teams/create`,
    postOptions
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = async (e) => {
    e.preventDefault();

    if (!teamForm.image) {
      toastEmitter('Upload image is required', 'error');
      return;
    }

    if (teamForm.nameofTeam.trim() === '' || teamForm.description.trim() === '') {
      toastEmitter('All fields are required', 'error');
      return;
    }

    const formData = await toFormData([
      { name: 'name', value: teamForm.nameofTeam },
      { name: 'description', value: teamForm.description },
      { name: 'imageUrl', value: teamForm.image },
    ]);

    const res = await createTeamFetch(formData);

    if (res.ok) {
        console.log(res)
      dispatch(addTeam(res.data.team));
      setTeamForm({ nameofTeam: '', description: '', image: null });
      navigate('/teams');
    }
  };

  return (
    <>
      {!loading ? (
        <button
          type="submit"
          onClick={editHandler}
          className="btn w-[220px] block mx-auto h-14 mt-10 btn-hover"
        >
          Create
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

export default CreateTeam;