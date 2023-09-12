import { createSlice } from '@reduxjs/toolkit';
import { getFriendsFakeData } from '../../Functions/getFriendsFakeData';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams:[]
  },
  reducers: {
    addTeam: (state, action) => {
      // Add the new team to the state
      const newTeamData=action.payload.teamData;
      const admin={
        track:'fronted',
        followed:true,
        id:action.payload.admin.id,
        userImg:null,
        userName:action.payload.admin.name,
      }
      const teamMembers= [admin,...getFriendsFakeData(5)]
      const newTeam={
        teamName:newTeamData.nameofTeam, teamBio:newTeamData.description,
         teamImage:action.payload.admin.image, 
        teamMembers,
        adminId:action.payload.admin.id,
        teamId:state.teams.length+1,
      }
      state.teams.push(newTeam);
    },
    setTeams:(state,action)=>{
        state.teams=action.payload
    },
    deleteMember:(state,action)=>{
      const removedUserid=action.payload.userId;
      const Editedteam=state.teams.find(team=> action.payload.teamId==team.teamId)
      const EditedteamIndex=state.teams.findIndex(team=>action.payload.teamId==team.teamId);
      const filteredTeamMembers=Editedteam.teamMembers.filter(member=>member.id!=removedUserid)
      Editedteam.teamMembers=filteredTeamMembers;
      state.teams[EditedteamIndex]=Editedteam;
    }
  },
});

export const { addTeam,setTeams,deleteMember } = teamsSlice.actions;
export default teamsSlice.reducer;