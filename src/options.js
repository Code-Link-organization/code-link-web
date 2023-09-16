
export const postOptions= (userToken)=> {
return{  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${userToken}`,
  },
}
};

export const getOptions = (userToken)=>{
 return{ method: 'GET',
  headers: {
    'Authorization': `Bearer ${userToken}`,
  },}
};