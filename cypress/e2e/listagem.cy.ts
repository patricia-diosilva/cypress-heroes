import userData from '../fixtures/userData.json';
import SignInPage from '../pages/signInPage';
import HeroesPage from '../pages/heroesPage';

const signInPage = new SignInPage;
const heroesPage = new HeroesPage;

describe('Listagem de Heróis', () => {
  it('Deve listar heróis', () => {
    signInPage.accessSignIn();
    signInPage.fillForm(userData.signIn.email, userData.signIn.password);
    heroesPage.heroList();
  })
})