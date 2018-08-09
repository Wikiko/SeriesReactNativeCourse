import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';


export default createStackNavigator(
  {
    Main: SeriesPage,
    Login: LoginPage
  },
  {
    navigationOptions: {
      title: 'Series',
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 30,
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#6ca2f7'
      }
    }
  }
);