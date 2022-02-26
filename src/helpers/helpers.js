const axios = require('axios').default;

const createPets = (name, userId, type) => {
  // const {name} = pet;
  // console.log('createPetName', name);
  console.log('name', name, 'userId', userId)
  return axios.post('https://pomopets.herokuapp.com//pets',
  {
    name,
    userId,
    type
  })
};

const createTimer = (userId, description) => {
  // console.log('userId', userId, 'description', description);
  return axios.post('https://pomopets.herokuapp.com//timers',
  {
    userId,
    description
  })
};

// const create_timer = axios.post('https://pomopets.herokuapp.com//timers',
//   {
//     user_id: user_id,
//     description: description
//   })
//   .then((response) => {
//     throw response;
//   })
//   .catch((error) => {
//     throw error;
//   });

const login = (user) => {
  const {email, password} = user;
  // console.log('email', email, 'password', password)
  return axios.post('https://pomopets.herokuapp.com//login',
  {
    email: email,
    password: password
  })
};

const logout = () => {
  // console.log('email', email, 'password', password)
  return axios.post('https://pomopets.herokuapp.com//logout')
};

const updatePets = (userId) => {
  // console.log('email', email, 'password', password)
  return axios.post('https://pomopets.herokuapp.com//pets/update',
  {
    userId: userId
  })
};

const updateUser = (userInfo, userId) => {
  const {username, email, password} = userInfo;
  return axios.post('https://pomopets.herokuapp.com//users/update',
  {
    id: userId,
    username: username,
    email: email,
    password: password
  })
};

const register = (user) => {
  const {username, email, password} = user;
  // console.log('email', email, 'password', password)
  return axios.post('https://pomopets.herokuapp.com//users/register',
  {
    username: username,
    email: email,
    password: password
  })
};

export {
  createPets,
  createTimer,
  login,
  logout,
  updatePets,
  updateUser,
  register
};