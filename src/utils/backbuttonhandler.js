import {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';

const useBackHandler = () => {
  const navigation = useNavigation();
  const routes = useNavigationState(state => state.routes);

  useEffect(() => {
    const handleBackPress = () => {
      if (routes.length === 1) {
        // If there's only one screen in the stack
        Alert.alert(
          'Exit App',
          'Do you want to exit?',
          [
            {
              text: 'No',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {cancelable: false},
        );
        return true;
      } else if (navigation.canGoBack()) {
        // If there are more screens to go back to
        navigation.goBack();
        return true;
      } else {
        return false; // Let the default handler handle it
      }
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation, routes]);

  return null;
};

export default useBackHandler;
