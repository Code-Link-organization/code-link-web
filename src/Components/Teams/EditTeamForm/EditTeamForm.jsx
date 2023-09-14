/* eslint-disable react-hooks/rules-of-hooks */
import  { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import uploadIcon from '../../../assets/images/teams/Layer_1.svg';
import CreateTeamInput from '../CreateTeamForm/CreateTeamInput';
import UploadTeamImage from '../CreateTeamForm/UploadTeamImage';
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
  const [uploadFromDevice, setUploadFromDevice] = useState(false);
  const teams = useSelector((state) => state.teams).teams;
  const team = teams.find((t) => t.id === teamId);

  useEffect(() => {
    if (team) {
      setTeamForm({
        nameofTeam: team.name,
        description: team.description,
        image: team.imageUrl,
      });
    }
  }, [team]);

  return (
    <div className="w-full bg-[rgba(252,250,248,1)]  z-10 relative pt-20">
      <DeleteTeam team={team ? team : null} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[375px] mx-auto element-center flex-col"
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
            <UploadTeamImage
              setUploadFromDevice={setUploadFromDevice}
              setTeamForm={setTeamForm}
              teamForm={teamForm}
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
  );
}

export default EditTeamForm;
