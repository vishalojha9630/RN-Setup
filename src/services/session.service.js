import CommonService from './common.services';

class SessionService extends CommonService {
  async login(params) {
    return this.post('login', params);
  }
  async otpVerify(params) {
    return this.post('verify', params);
  }
}

export const sessionService = new SessionService();
