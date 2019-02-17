import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const instance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_URL
});
console.log(process.env);
export default instance;