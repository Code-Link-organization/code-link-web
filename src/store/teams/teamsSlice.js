import { createSlice } from '@reduxjs/toolkit';
import { fetchTeams } from './fetchTeams';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams:[]
  },
  reducers: {
    addTeam: (state, action) => {
      // Add the new team to the state

      state.teams.push(action.payload);
    },
    deleteTeam:(state,action)=>{
          const updatedTeams = state.teams.filter((team) => team.id !== action.payload);
          state.teams=updatedTeams;
          console.log(action.payload)


    },
    editTeam:(state,action)=>{
    const updatedTeams = state.teams.map((team) => {
      if (team.id === action.payload.id) {
        return {...action.payload};
      }
      return team;
    });
    state.teams=updatedTeams;

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
  extraReducers:(builder) => {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      console.log(action.payload)
      state.teams = action.payload.teams;
    });
  } 
});

export const { addTeam,setTeams,deleteMember,deleteTeam,editTeam } = teamsSlice.actions;
export default teamsSlice.reducer;