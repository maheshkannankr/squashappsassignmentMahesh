/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {wp} from '../utils/dimension';
import {colors, fontfamily} from '../themes';
import * as rn from 'react-native';
import {RatingView} from '../components';
import fontsize from '../themes/fontsize';
const CategoryBanner = ({
  categoryName,
  rating = 1,
  sizeSM = true,
  bgColor,
  onPressBanner,
}) => {
  const playNowButtonView = () => {
    return (
      <rn.View style={styles.playNowButtonView}>
        <rn.Text style={styles.playNowButtonTextView}>{'Play Now'}</rn.Text>
      </rn.View>
    );
  };
  return (
    <rn.TouchableOpacity
      style={[
        styles.bannerOuterContainer,
        {
          width: sizeSM ? wp(200) : '100%',
          height: sizeSM ? wp(120) : wp(150),
          backgroundColor: bgColor,
          borderRadius: wp(10),
        },
      ]}
      onPress={onPressBanner}>
      <rn.View style={styles.categoryBannerLeft}>
        <rn.Text style={styles.bannerQuizCategoryNameText}>
          {categoryName}
        </rn.Text>
        <rn.Text style={styles.bannerQuizCategoryNameText}>{'Quiz'}</rn.Text>
        <RatingView showTotal={true} rating={rating} />
        {playNowButtonView()}
      </rn.View>
      <rn.View style={styles.categoryBannerRight}>
        <rn.Image
          style={styles.bannerLegoView}
          source={require('../../assets/images/homepage/categorybanner/historylego.png')}
        />
      </rn.View>
    </rn.TouchableOpacity>
  );
};

const styles = rn.StyleSheet.create({
  bannerOuterContainer: {
    padding: wp(5),
    borderRadius: wp(10),
    flexDirection: 'row',
  },

  categoryBannerLeft: {
    flex: 1,
    padding: wp(5),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  categoryBannerRight: {flex: 1},

  bannerQuizCategoryNameText: {
    color: colors.white,
    fontFamily: fontfamily.fBold,
    fontSize: fontsize.secondaryHeading,
  },

  bannerLegoView: {
    resizeMode: 'contain',
    width: '100%',
  },

  starView: {
    columnGap: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  playNowButtonView: {
    padding: wp(5),
    width: '90%',
    borderRadius: wp(10),
    backgroundColor: colors.white,
  },

  playNowButtonTextView: {
    fontSize: fontsize.normalSize,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.themePrimary,
  },
});

export default CategoryBanner;
