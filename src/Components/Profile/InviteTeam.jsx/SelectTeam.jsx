/* eslint-disable react/prop-types */

function SelectTeam({ teams, setSelectedTeam }) {

  const changeHandler = (e) => {
    const selectedTeam = JSON.parse(e.target.value); 
    setSelectedTeam(selectedTeam); 
  };



  return (
    <div className="w-full flex flex-col justify-center items-center">
      <select
        onChange={changeHandler}
        className="select bg-primary py-2 px-16 text-white font-bold rounded-md outline-none mx-auto"
      >
        {teams.map((team) => (
          <option key={team.id} value={JSON.stringify(team)}>
            {team.name}
          </option>
        ))}
      </select>
      <div className="arrow"></div>
    </div>
  );
}

export default SelectTeam;