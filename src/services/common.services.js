import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default class CommonService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8040/',
    });

    this.apiClient.interceptors.request.use(async (request) => {
      let access_token = await AsyncStorage.getItem('ZjsmNktQYO');
      request.headers = {
        'Content-Type': 'application/json',
        // Authorization: `${access_token}`,
      };
      return request;
    });

    this.apiClient.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        if (error.response.status === 401) {
          AsyncStorage.clear();
        }
        return error;
      }
    );
  }

  async get(endpoint, params = '') {
    return await this.apiClient.get(endpoint + params);
  }

  async post(endpoint, params = {}) {
    return await this.apiClient.post(endpoint, params && JSON.stringify(params));
  }

  async put(endpoint, params = {}) {
    return await this.apiClient.put(endpoint, params && JSON.stringify(params));
  }

  async delete(endpoint) {
    return await this.apiClient.delete(endpoint);
  }
}
