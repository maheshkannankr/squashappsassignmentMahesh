import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {
  BackNavHeader,
  CategoryBanner,
  CategoryLargeBanner,
  Icons,
} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName, quizCategories} from '../../utils';

const CategoryScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressCategoryBanner = () => {
    navigation.navigate('categoryListScreen');
  };
  return (
    <rn.ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}
      contentContainerStyle={{
        gap: wp(10),
      }}>
      <BackNavHeader navigation={navigation} pageTitle={'Categories'} />
      {quizCategories.map((category, index) => {
        return (
          <CategoryLargeBanner
            bgColor={category.bgColor}
            categoryName={category.name}
            rating={category.rating}
            imageAddress={category.imageAddress}
            key={index}
            index={index}
            onPressCategoryBanner={onPressCategoryBanner}
          />
        );
      })}
    </rn.ScrollView>
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

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default CategoryScreen;
