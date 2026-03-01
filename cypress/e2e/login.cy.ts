import userData from '../fixtures/userData.json';
import SignInPage from '../pages/signInPage';

const signInPage = new SignInPage();


describe('Login de Usuário - Válido', () => {
  it('Preencher com login de usuário válido', () => {
    signInPage.accessSignIn();
    signInPage.fillForm(userData.signIn.email, userData.signIn.password);
  });
});

describe('Login de Usuário - Inválido', () => {
  it('Preencher com login de usuário inválido', () => {
    signInPage.accessSignIn();
    signInPage.fillFail(userData.signInFail.email, userData.signInFail.password);
  });
});

  describe('Login de Usuário - Incompleto', () => {
  it('Preencher com login de usuário incompleto', () => {
    signInPage.accessSignIn();
    signInPage.incompleteForm(userData.incompleteSignIn.email, userData.incompleteSignIn.password);
  });
});

  describe('Login de Usuário - Admin', () => {
  it('Preencher com login de admin', () => {
    signInPage.accessSignIn();
    signInPage.adminForm(userData.adminSignIn.email, userData.adminSignIn.password);
  });
});