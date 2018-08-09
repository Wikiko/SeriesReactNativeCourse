import { createStackNavigator } from 'react-navigation';
import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';


export default createStackNavigator(
  {
    SerieForm: SerieFormPage,
    Login: LoginPage,
    Main: SeriesPage,
    SerieDetail: SerieDetailPage,
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