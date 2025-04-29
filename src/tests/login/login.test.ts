import { Serverest } from '../services/serverest';
import { loginValido } from '../../data/login.data';

describe('Login - Serverest API', () => {
  it('Deve realizar login com sucesso', async () => {
    const response = await Serverest.login(loginValido);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Login realizado com sucesso");
    expect(response.body.authorization).toBeDefined();
  });
});
