import userData from '../fixtures/userData.json';
import SignInPage from '../pages/signInPage';
import ControlPage from '../pages/controlPage';

const signInPage = new SignInPage;
const controlPage = new ControlPage;

describe('Controle de permissão - Admin', () => {
  it('Controle de permissão', () => {
    signInPage.accessSignIn();
    signInPage.adminForm(userData.adminSignIn.email, userData.adminSignIn.password);
    controlPage.adminControl();
  })
})

describe('Controle de permissão - Usuário', () => {
  it('Controle de permissão', () => {
    signInPage.accessSignIn();
    signInPage.fillForm(userData.signIn.email, userData.signIn.password);
    controlPage.userControl();
  })
})