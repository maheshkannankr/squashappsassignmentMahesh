import {
  HomeScreen,
  SignupScreen,
  SplashScreen,
  RankingScreen,
  TabNavigation,
  ProfileScreen,
  CategoryScreen,
  OnBoardingScreen,
  FillProfileScreen,
  LanguageSelectionScreen,
  QuizTestScreen,
  TestResultScreen,
} from '../screens';
import CategoryListScreen from '../screens/categorylistscreen/categorylistscreen';
import FavTopicScreen from '../screens/choosefavtopic/choosefavtopicscreen';

const AppScreens = {
  SplashScreen: {
    headerShown: false,
    name: 'splashScreen',
    title: 'Splash',
    component: SplashScreen,
  },
  OnBoardingScreen: {
    headerShown: false,
    name: 'onboardingScreen',
    title: 'Onboarding',
    component: OnBoardingScreen,
  },
  SignupScreen: {
    headerShown: false,
    name: 'signupScreen',
    title: 'Signup',
    component: SignupScreen,
  },
  LanguageSelectionScreen: {
    headerShown: false,
    name: 'languageSelectionScreen',
    title: 'Langauage Selection',
    component: LanguageSelectionScreen,
  },
  FillProfileScreen: {
    headerShown: false,
    name: 'fillProfileScreen',
    title: 'Fill Profile',
    component: FillProfileScreen,
  },
  TabNavigation: {
    headerShown: false,
    name: 'tabNavigation',
    title: 'Tab Navigation',
    component: TabNavigation,
  },
  HomeScreen: {
    headerShown: false,
    name: 'homeScreen',
    title: 'Home Screen',
    component: HomeScreen,
  },
  CategoryScreen: {
    headerShown: false,
    name: 'categoryScreen',
    title: 'Category Screen',
    component: CategoryScreen,
  },
  RankingScreen: {
    headerShown: false,
    name: 'rankingScreen',
    title: 'Ranking Screen',
    component: RankingScreen,
  },
  ProfileScreen: {
    headerShown: false,
    name: 'profileScreen',
    title: 'Profile Screen',
    component: ProfileScreen,
  },
  FavTopicScreen: {
    headerShown: false,
    name: 'favTopicScreen',
    title: 'Fav Topic Screen',
    component: FavTopicScreen,
  },
  CategoryListScreen: {
    headerShown: false,
    name: 'categoryListScreen',
    title: 'Category List Screen',
    component: CategoryListScreen,
  },
  QuizTestScreen: {
    headerShown: false,
    name: 'quizTestScreen',
    title: 'Quiz Test Screen',
    component: QuizTestScreen,
  },
  TestResultScreen: {
    headerShown: false,
    name: 'testResultScreen',
    title: 'Test Result Screen',
    component: TestResultScreen,
  },
};

export default AppScreens;
