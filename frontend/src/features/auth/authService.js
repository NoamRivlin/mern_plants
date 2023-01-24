import axios from 'axios';

const API_URL = '/api/users';
//changed jason to 5000 and  going to 5000/api/users doesnt do nothin - damn this tutorial"

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
