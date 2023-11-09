import api from "./apiConfig.js";

export const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    return response.data;
  } catch (error) {
    console.error(`Failed to get cats - error: ${error}`);
    throw error;
  }
};

export const getTask = async (id) => {
  try {
    const response = await api.get(`/task/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get cat - error: ${error}`);
    throw error;
  }
};

export const createTask = async (TaskData) => {
  try {
    const response = await api.post("/task", catData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (id, catData) => {
  try {
    const response = await api.put(`/task/${id}`, catData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
