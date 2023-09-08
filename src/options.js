

// Assuming you have set up your Redux store and have a slice named 'auth'

// Inside your component or function where you make the HTTP request:


// Define your request options with the user token
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