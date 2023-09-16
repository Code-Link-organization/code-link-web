import { createSlice } from '@reduxjs/toolkit';
import { fetchTeams } from './fetchTeams';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    teams:[],
    loading:false
  },
  reducers: {
    addTeam: (state, action) => {
      // Add the new team to the state

      state.teams.push(action.payload);
    },
    deleteTeam:(state,action)=>{
          const updatedTeams = state.teams.filter((team) => team.id !== action.payload);
          state.teams=updatedTeams;


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
    leaveTeam:(state,action)=>{
          const updatedTeams = state.teams.map((team) => {
      if (team.id === action.payload.teamId) {
        const updatedMembers = team.members.filter((member) => member.pivot.user_id !== action.payload.userId);
        return { ...team, members: updatedMembers };
      }
      return team;
    });
     state.teams=updatedTeams

    },
    addMember:(state,action)=>{
    const teamId=action.payload.id
    const updatedTeams = state.teams.map((team) => {
      if (team.id==teamId  ) {
        const updatedMembers = [...team.members, action.payload.newMember];
        return { ...team, members: updatedMembers };
      
      }
      else{
        return team
      }
    })
      state.teams=updatedTeams;
    },
    deleteMember:(state,action)=>{
    const updatedTeams = state.teams.map((team) => {
      if (team.id === action.payload.teamId) {
        const updatedMembers = team.members.filter((member) => member.id !== action.payload.memberId);
        return { ...team, members: updatedMembers };
      }
      return team;
    });
     state.teams=updatedTeams
    
    }},
  extraReducers:(builder) => {
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.loading=false
      state.teams = action.payload.teams;
    });
        builder.addCase(fetchTeams.pending, (state) => {
      state.loading = true

    });
  } 
});

export const { addTeam,setTeams,deleteMember,deleteTeam,editTeam ,addMember,leaveTeam} = teamsSlice.actions;
export default teamsSlice.reducer;