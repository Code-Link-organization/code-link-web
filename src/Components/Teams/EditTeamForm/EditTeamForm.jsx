/* eslint-disable react-hooks/rules-of-hooks */
import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import uploadIcon from '../../../assets/images/teams/Layer_1.svg';
import CreateTeamInput from '../CreateTeamForm/CreateTeamInput';
import UploadImage from '../../GlobalComponents/UploadImage';
import { imgLink } from '../../../api';
import DeleteTeam from './DeleteTeam';
import EditTeam from './EditTeam';

function EditTeamForm() {
  const { teamId } = useParams();
  const [teamForm, setTeamForm] = useState({
    nameofTeam: '',
    description: '',
    image: null,
  });
  const user=useSelector(state=>state.auth).user
  const [uploadFromDevice, setUploadFromDevice] = useState(false);
  const teams = useSelector((state) => state.teams).teams;
  const team = teams.find((t) =>{   return  t.id == teamId});

  useEffect(() => {
    if (team) {
      setTeamForm({
        nameofTeam: team.name,
        description: team.description,
        image: team.imageUrl,
      });
    }
  }, [team]);
  if(team){
  if(team.leader_id!=user.id) return <Navigate to='/teams' replace={true}/>
  return (
    <div className="w-full bg-[rgba(252,250,248,1)]  z-10 relative pt-20">
      <DeleteTeam team={team ? team : null} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[375px] mx-auto element-center flex-col mt-4"
      >
        <div className="relative w-[250px] h-[250px] mx-auto  element-center rounded-full bg-white">
          <img
            src={
              uploadFromDevice
                ? URL.createObjectURL(teamForm.image)
                : `${imgLink}/${teamForm.image}`
            }
            alt="create team img"
            className="w-[225px] h-[225px]"
          />
          <div alt="upload img icon" className="absolute right-[36px] bottom-[28px]">
            <UploadImage
              setUploadFromDevice={setUploadFromDevice}
              setFormData={setTeamForm}
              formData={teamForm}
              value="image"
              uploadIcon={uploadIcon}
            />
          </div>
        </div>
        <div className="pt-8 flex flex-col">
          <CreateTeamInput
            placeholder="Name of team"
            value="nameofTeam"
            setTeamForm={setTeamForm}
            teamForm={teamForm}
          />
          <CreateTeamInput
            placeholder="Description of the project"
            value="description"
            teamForm={teamForm}
            setTeamForm={setTeamForm}
          />
        </div>
        <EditTeam setTeamForm={setTeamForm} teamForm={teamForm} team={team} />
      </form>
    </div>
  );}
}

export default EditTeamForm;
