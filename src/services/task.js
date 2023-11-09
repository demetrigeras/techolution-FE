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
    const response = await api.get(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get cat - error: ${error}`);
    throw error;
  }
};

export const createTask = async (TaskData) => {
  try {
    const response = await api.post("/tasks", TaskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (id, catData) => {
  try {
    const response = await api.put(`/tasks/${id}`, catData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
