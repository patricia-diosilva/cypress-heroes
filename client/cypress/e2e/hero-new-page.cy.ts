import userData from '../fixtures/userData.json';
import SignInPage from '../pages/signInPage';
import NewHeroPage from '../pages/newHeroPage';

const signInPage = new SignInPage();
const newHeroPage = new NewHeroPage();


describe('Criar Novo Herói', () => {
  it('Deve criar um novo herói', () => {
    signInPage.accessSignIn();
    signInPage.adminForm(userData.adminSignIn.email, userData.adminSignIn.password);
    newHeroPage.createNewHero(userData.newHero.name, userData.newHero.price, userData.newHero.fans, userData.newHero.saves, userData.newHero.powers);
  });
});

describe('Criar Novo Herói - Incompleto', () => {
  it('Deve criar um novo herói com preenchimento incompleto', () => {
    signInPage.accessSignIn();
    signInPage.adminForm(userData.adminSignIn.email, userData.adminSignIn.password);
    newHeroPage.createIncompleteHero(userData.newHero.name, userData.newHero.price, userData.newHero.fans, userData.newHero.saves, userData.newHero.powers);
  });
});

describe('Deletar Novo Herói', () => {
  it('Deve deletar novo herói', () => {
    signInPage.accessSignIn();
    signInPage.adminForm(userData.adminSignIn.email, userData.adminSignIn.password);
    newHeroPage.deleteNewHero();
  });
});