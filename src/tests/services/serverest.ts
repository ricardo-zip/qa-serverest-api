import request from 'supertest';

const api = request('https://serverest.dev');

export const Serverest = {
  login: (payload: object) => {
    return api.post('/login').send(payload);
  }
};
