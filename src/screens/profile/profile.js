import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';
import {BackNavHeader} from '../../components';
import {StandingsLogo} from '../../components/icons';
import GraphChart from './graphchart';

const RankCategoryView = ({Logo, title, pointValue, isDarkMode}) => {
  return (
    <rn.View style={styles.rankContainerRankTitleContainer}>
      <Logo color={isDarkMode ? colors.black : colors.white} />
      <rn.Text style={styles.rankContainerRankTitleText}>
        {title.toUpperCase()}
      </rn.Text>
      <rn.Text
        style={[
          styles.rankContainerRankValueText,
          {color: isDarkMode ? colors.white : colors.primaryFont},
        ]}>
        {pointValue}
      </rn.Text>
    </rn.View>
  );
};

const ProfileScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const renderProfilePhotoView = () => {
    return (
      <rn.View style={styles.profileImageContainer}>
        <rn.Image
          style={styles.profileImageView}
          source={require('../../../assets/images/profile/profileimage.png')}
        />
      </rn.View>
    );
  };

  const renderProfileRankingView = () => {
    return (
      <rn.View
        style={[
          styles.profileRankingContainer,
          {
            backgroundColor: isDarkMode
              ? colors.levelCardBackGround
              : colors.white,
          },
        ]}>
        <RankCategoryView
          Logo={Icons.RankStar}
          title={'Points'}
          isDarkMode={isDarkMode}
          pointValue={1321}
        />
        <RankCategoryView
          Logo={Icons.WorldRankStar}
          title={'World Rank'}
          isDarkMode={isDarkMode}
          pointValue={'#32'}
        />
        <RankCategoryView
          Logo={Icons.GamesRank}
          title={'Games'}
          isDarkMode={isDarkMode}
          pointValue={321}
        />
        <RankCategoryView
          Logo={Icons.CoinsRank}
          title={'Coins'}
          isDarkMode={isDarkMode}
          pointValue={220}
        />
      </rn.View>
    );
  };
  const renderProfilePerformanceView = () => {
    const renderSingleLegendView = ({color, title}) => {
      return (
        <rn.View style={styles.singleLengendViewContainer}>
          <rn.View
            style={[styles.lengendCircleView, {backgroundColor: color}]}
          />
          <rn.Text
            style={[
              styles.lengendTitleText,
              {
                color: isDarkMode ? colors.white : colors.primaryFont,
              },
            ]}>
            {title}
          </rn.Text>
        </rn.View>
      );
    };

    const renderLengendsView = () => {
      return (
        <rn.View style={styles.lengendsViewContainer}>
          {renderSingleLegendView({color: '#FFB9F1', title: 'Maths'})}
          {renderSingleLegendView({color: '#FF85E7', title: 'Sports'})}
          {renderSingleLegendView({color: '#ED03BF', title: 'Music'})}
        </rn.View>
      );
    };
    return (
      <rn.View
        style={[
          styles.profilePerformanceContainer,
          {
            backgroundColor: isDarkMode
              ? colors.levelCardBackGround
              : colors.white,
          },
        ]}>
        <rn.View style={styles.performanceHeaderContainer}>
          <rn.Text
            style={[
              styles.performanceCategoryTitleText,
              {color: isDarkMode ? colors.white : colors.black},
            ]}>
            {'Top performance by category'}
          </rn.Text>
          <StandingsLogo color={isDarkMode ? colors.white : colors.black} />
        </rn.View>
        {renderLengendsView()}
        <GraphChart />
      </rn.View>
    );
  };

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader navigation={navigation} pageTitle={'Profile'} />
      {renderProfilePhotoView()}
      {renderProfileRankingView()}
      {renderProfilePerformanceView()}
      <rn.View style={styles.emptyContentView} />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  emptyContentView: {
    height: hp(50),
  },

  container: {
    flex: 1,
    gap: hp(10),
    padding: wp(10),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  profileImageView: {
    flex: 1,
    aspectRatio: 1,
  },

  profilePerformanceContainer: {
    flex: 2.5,
    elevation: 2,
    width: '100%',
    padding: wp(20),
    columnGap: wp(10),
    borderRadius: wp(15),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  performanceHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  performanceCategoryTitleText: {
    fontFamily: fontfamily.fBold,
    fontSize: fontsize.headingSize,
  },

  singleLengendViewContainer: {
    flex: 1,
    columnGap: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lengendCircleView: {
    borderRadius: wp(10),
    height: wp(10),
    width: wp(10),
  },

  lengendTitleText: {
    fontSize: fontsize.descriptionSize,
    fontFamily: fontfamily.fRegular,
  },
  lengendsViewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //   Ranking Container Styles

  profileRankingContainer: {
    flex: 1,
    elevation: 2,
    width: '100%',
    paddingVertical: wp(10),
    paddingHorizontal: wp(30),
    borderRadius: wp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rankContainerRankTitleContainer: {
    gap: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  rankContainerRankTitleText: {
    fontSize: fontsize.normalSize,
    fontFamily: fontfamily.fBold,
    color: colors.themePrimary,
  },

  rankContainerRankValueText: {
    fontSize: fontsize.normalSize,
    fontFamily: fontfamily.fSemiBold,
  },
});
export default ProfileScreen;
