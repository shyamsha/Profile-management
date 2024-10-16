import axios from "axios";

interface Config {
  env: string;
  isProd: boolean;
  production: {
    api_endpoint: string;
  };
  development: {
    api_endpoint: string;
  };
}

interface Profile {
  name: string;
  email: string;
  age?: number;
}

const config: Config = {
  env: "production",
  isProd: process.env.NODE_ENV === "production" || false,
  production: {
    api_endpoint: "",
  },
  development: {
    api_endpoint: process.env.REACT_APP_API_URL as string,
  },
};
const API_URL = config.isProd
  ? config.production.api_endpoint
  : config.development.api_endpoint;

export const fetchProfile = () => axios.get(`${API_URL}/profile`);
export const createProfile = (profile: Profile) =>
  axios.post(`${API_URL}/profile`, profile);
export const updateProfile = (profile: Profile) =>
  axios.put(`${API_URL}/profile`, profile);
export const deleteProfile = () => axios.delete(`${API_URL}/profile`);
