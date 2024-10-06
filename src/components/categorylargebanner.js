/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {wp} from '../utils/dimension';
import {colors, fontfamily} from '../themes';
import * as rn from 'react-native';
import {RatingView} from '../components';
import fontsize from '../themes/fontsize';
const CategoryLargeBanner = ({
  categoryName,
  rating = 1,
  bgColor,
  imageAddress,
  index,
  onPressCategoryBanner,
  leftImageView = false,
}) => {
  const playNowButtonView = () => {
    return (
      <rn.View style={styles.playNowButtonView}>
        <rn.Text style={styles.playNowButtonTextView}>{'Play Now'}</rn.Text>
      </rn.View>
    );
  };

  const renderLeftSideView = () => {
    return (
      <rn.View style={styles.categoryBannerLeft}>
        <rn.Text style={styles.bannerQuizCategoryNameText}>
          {categoryName}
        </rn.Text>
        <rn.Text style={styles.bannerQuizCategoryNameText}>{'Quiz'}</rn.Text>
        <RatingView showTotal={true} rating={rating} />
        {playNowButtonView()}
      </rn.View>
    );
  };

  const renderRightSideView = () => {
    return (
      <rn.View style={styles.categoryBannerRight}>
        <rn.Image style={styles.bannerLegoView} source={imageAddress} />
      </rn.View>
    );
  };

  return (
    <rn.TouchableOpacity
      onPress={onPressCategoryBanner}
      activeOpacity={0.8}
      style={[
        styles.bannerOuterContainer,
        {
          backgroundColor: bgColor,
        },
      ]}>
      {!leftImageView ? renderRightSideView() : renderLeftSideView()}
      {leftImageView ? renderRightSideView() : renderLeftSideView()}
    </rn.TouchableOpacity>
  );
};

const styles = rn.StyleSheet.create({
  bannerOuterContainer: {
    width: '100%',
    height: wp(150),
    padding: wp(5),
    borderRadius: wp(25),
    flexDirection: 'row',
    overflow: 'hidden',
  },

  categoryBannerLeft: {
    flex: 1,
    padding: wp(5),
    paddingHorizontal: wp(10),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  categoryBannerRight: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  bannerQuizCategoryNameText: {
    color: colors.white,
    fontSize: fontsize.headingSize,
    fontFamily: fontfamily.fBold,
  },

  bannerLegoView: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
  },

  starView: {
    columnGap: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  playNowButtonView: {
    padding: wp(10),
    width: '90%',
    borderRadius: wp(10),
    backgroundColor: colors.white,
  },

  playNowButtonTextView: {
    fontSize: fontsize.descriptionSize,
    fontFamily: fontfamily.fBold,
    textAlign: 'center',
    color: colors.themePrimary,
  },
});

export default CategoryLargeBanner;
