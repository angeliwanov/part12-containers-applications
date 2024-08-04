import axios from 'axios';

const base = 'http://localhost:8080/api';
const baseUrl = `${base}/api/persons`;

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createPerson = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const deletePerson = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
};

const updatePerson = async (id, updatedPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
  return response.data;
};

export default { getAll, createPerson, deletePerson, updatePerson };
