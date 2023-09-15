/* eslint-disable react/prop-types */
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../api';
import useFetch from '../../../CustomHooks/useFetch';
import { toastEmitter } from '../../../Functions/toastEmitter';
import { toFormData } from '../../../Functions/toFormData';
import { postOptions } from '../../../options';
import { editTeam } from '../../../store/teams/teamsSlice';

function EditTeam({ team, teamForm, setTeamForm }) {
  const { fetchApi: editTeamFetch, loading } = useFetch(
    `${api}/teams/edit/${team?.id}`,
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

    const res = await editTeamFetch(formData);

    if (res.ok) {
      dispatch(editTeam(res.data.team));
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
          className="btn w-[220px] block mx-auto h-14 mt-10 btn-hover "
        >
          Save
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

export default EditTeam;
