import { spec } from 'pactum';
import UsersDataBuilder from "../../builder/user.dataBuilder";

describe('Login - Serverest API', () => {
  it('deve realizar login com sucesso', async () => {

    const user = new UsersDataBuilder()
      .withEmail('fulano@qa.com')
      .withPassword('teste')
      .build()

    await spec()
      .post('https://serverest.dev/login')
      .withBody({
        email: user.email,
        password: user.password,
      })
      .expectStatus(200)
      .expectJsonLike({
        message: 'Login realizado com sucesso'
      })
  })

  it('deve falhar ao autenticar usuário com dados incorretos', async () => {
    const user = new UsersDataBuilder()
    .withEmail('fulano@qa3000.com')
    .withPassword('teste')
    .build()

  await spec()
    .post('https://serverest.dev/login')
    .withBody({
      email: user.email,
      password: user.password,
    })
    .expectStatus(401)
    .expectJsonLike({
      message: 'Email e/ou senha inválidos'
    })
  })
});
