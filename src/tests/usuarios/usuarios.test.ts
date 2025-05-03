import { spec } from 'pactum';
import UsersDataBuilder from '../../builder/user.dataBuilder';

describe('Usuarios - Serverest', () => {
  it('deve criar um usuário com dados falsos', async () => {
    const user = new UsersDataBuilder().build();

    await spec()
      .post('https://serverest.dev/usuarios')
      .withBody({
        nome: user.name,
        email: user.email,
        password: user.password,
        administrador: user.administrador
      })
      .expectStatus(201)
      .expectJsonLike({
        message: 'Cadastro realizado com sucesso'
      });
  });
});

