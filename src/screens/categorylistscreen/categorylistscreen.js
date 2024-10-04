import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {
  BackNavHeader,
  CategoryBanner,
  CategoryLargeBanner,
  Icons,
  QuizLevelCard,
} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName, quizCategories} from '../../utils';

const CategoryListScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressQuizCard = () => {
    navigation.navigate('quizTestScreen');
  };

  let dummyArray = new Array(10).fill(1);
  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader pageTitle={'History Quiz'} />
      <rn.View style={styles.quizListContainer}>
        <rn.ScrollView contentContainerStyle={{gap: wp(16)}}>
          {dummyArray.map((dummy, index) => {
            return (
              <QuizLevelCard key={index} onPressQuizCard={onPressQuizCard} />
            );
          })}
        </rn.ScrollView>
      </rn.View>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(16),
    width: '100%',
    height: '100%',
    padding: wp(10),
  },

  quizListContainer: {
    flex: 12,
    width: '100%',
    height: '100%',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default CategoryListScreen;
