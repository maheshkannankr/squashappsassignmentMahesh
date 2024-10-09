/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {CategoryBanner, Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {quizCategories} from '../../utils';

/* const BannerCarousal = ({categoryName, rating = 1}) => {
  const starArray = new Array(5).fill(false);
  starArray.fill(true, 0, rating);
  return (
    <rn.View>
      <rn.View style={styles.categoryBannerLeft}>
        <rn.Text>{categoryName}</rn.Text>
        <rn.Text>{'Quiz'}</rn.Text>
        <rn.View style={styles.starView}>
          {starArray.map((star, index) => {
            return star ? (
              <Icons.RatingStar key={index} />
            ) : (
              <Icons.NegativeRatingStar key={index} />
            );
          })}
          <rn.Text>{`${rating} / 5`}</rn.Text>
        </rn.View>
      </rn.View>
      <rn.View style={styles.categoryBannerRight}></rn.View>
    </rn.View>
  );
}; */

const Categories = ({navigation, onClickSeeAllLink}) => {
  const isDark = rn.useColorScheme() === 'dark';

  const navigateToCategoryListScreen = () => {
    navigation.navigate('categoryListScreen');
  };

  const navigateToCategoryScreen = () => {
    navigation.jumpTo('Category');
  };

  const renderCatergoryHeadingText = () => {
    return (
      <rn.View style={styles.categoriesHeadingContainer}>
        <rn.Text
          style={[
            styles.categoriesHeadingText,
            {color: isDark ? colors.white : colors.primaryFont},
          ]}>
          {'Categories'}
        </rn.Text>
        <rn.Text
          onPress={navigateToCategoryScreen}
          style={styles.categoriesSeeAllText}>
          {'See All'}
        </rn.Text>
      </rn.View>
    );
  };

  const renderBannerCarouselView = () => {
    return (
      <rn.ScrollView
        horizontal={true}
        contentContainerStyle={{
          flexDirection: 'row',
          gap: wp(10),
          flexGrow: 1,
        }}>
        {quizCategories.map((category, index) => {
          return (
            <CategoryBanner
              key={index}
              categoryName={category.name}
              rating={category.rating}
              bgColor={category.bgColor}
              onPressBanner={navigateToCategoryListScreen}
            />
          );
        })}
      </rn.ScrollView>
    );
  };
  return (
    <rn.View style={styles.categoryViewContainer}>
      {renderCatergoryHeadingText()}
      {renderBannerCarouselView()}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  categoryViewContainer: {
    flex: 1,
    rowGap: wp(10),
    width: '100%',
  },

  categoryBannerCarouselContainer: {
    flex: 1,
    paddingVertical: hp(10),
  },

  categoriesHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  categoriesHeadingText: {
    fontFamily: fontfamily.fBold,
    fontSize: fontsize.buttonText,
  },

  categoriesSeeAllText: {
    fontSize: fontsize.descriptionSize,
    color: colors.themePrimary,
    fontFamily: fontfamily.fRegular,
  },

  //   Banner Styles

  starView: {
    flexDirection: 'row',
  },
});

export default Categories;
