import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily, fontsize} from '../../themes';
import * as rn from 'react-native';

import {BackNavHeader} from '../../components';

const Polygon = ({pointValue, rank}) => {
  return (
    <rn.View style={styles.diamond}>
      <rn.Text style={styles.rankTextStyle}>{rank}</rn.Text>
      <rn.Text style={styles.pointTextStyle}>{pointValue}</rn.Text>
    </rn.View>
  );
};

const RankingScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const renderTabSwitchView = () => {
    return (
      <rn.View style={styles.tabSwitchView}>
        <rn.View style={styles.tabSwitchItemSelectedContainer}>
          <rn.Text style={styles.tabswitchItemText}>{'Weekly'}</rn.Text>
        </rn.View>
        <rn.View style={styles.tabSwitchItemContainer}>
          <rn.Text style={styles.tabswitchItemText}>{'All Time'}</rn.Text>
        </rn.View>
      </rn.View>
    );
  };
  const renderRankStandingsView = () => {
    return (
      <rn.View style={styles.rankStandingsView}>
        <rn.View style={styles.polygon1}>
          <Polygon pointValue={3000} rank={2} />
        </rn.View>
        <rn.View style={styles.polygon2}>
          <Polygon pointValue={3000} rank={1} />
        </rn.View>
        <rn.View style={styles.polygon3}>
          <Polygon pointValue={3000} rank={3} />
        </rn.View>
      </rn.View>
    );
  };
  const renderRankTableView = () => {
    return (
      <rn.View
        style={[
          styles.rankTableView,
          {backgroundColor: isDarkMode ? colors.black : colors.white},
        ]}></rn.View>
    );
  };
  const renderBlankSpace = () => {
    return (
      <rn.View
        style={[
          styles.blankSpaceView,
          {backgroundColor: isDarkMode ? colors.black : colors.white},
        ]}></rn.View>
    );
  };
  return (
    <rn.View style={styles.container}>
      <BackNavHeader
        navigation={navigation}
        pageTitle={'Ranking'}
        titleTextColor={colors.white}
        bgColor={colors.themePrimary}
      />
      <rn.View style={styles.contentContainerStyle}>
        {renderTabSwitchView()}
        {renderRankStandingsView()}
        {renderRankTableView()}
        {renderBlankSpace()}
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.themePrimary,
  },

  contentContainerStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.themePrimary,
  },

  tabSwitchView: {
    flex: 0.4,
    width: '100%',
    gap: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themePrimary,
  },

  tabSwitchItemContainer: {
    padding: wp(10),
    paddingHorizontal: wp(50),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabSwitchItemSelectedContainer: {
    padding: wp(10),
    paddingHorizontal: wp(50),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.rankStandingBgColor,
  },

  tabswitchItemText: {
    fontfamily: fontfamily.fRegular,
    fontSize: fontsize.descriptionSize,
    color: colors.white,
  },

  rankStandingsView: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.themePrimary,
  },

  polygonView: {
    flex: 1.5,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    bottom: 600,
  },

  rankTableView: {
    flex: 3,
    width: '130%',
    alignSelf: 'center',
    borderTopLeftRadius: wp(500),
    borderTopRightRadius: wp(500),
    alignItems: 'center',
  },
  blankSpaceView: {
    height: wp(70),
    width: '100%',
    backgroundColor: colors.black,
  },

  // styles for polygon

  diamond: {
    width: 100,
    height: 150,
    elevation: 15,
    backgroundColor: colors.rankStandingBgColor,
  },

  polygon1: {
    position: 'absolute',
    bottom: -40,
    left: 60,
    transform: [
      {
        rotate: '350deg',
      },
    ],
  },
  polygon2: {
    position: 'absolute',
    bottom: -10,
    transform: [
      {
        rotate: '5deg',
      },
    ],
  },
  polygon3: {
    position: 'absolute',
    bottom: -60,
    right: 75,
    transform: [
      {
        rotate: '20deg',
      },
    ],
  },

  rankTextStyle: {
    fontFamily: fontfamily.fExtraBold,
    fontSize: fontsize.rankText,
    color: colors.white,
    textAlign: 'center',
  },
  pointTextStyle: {
    fontFamily: fontfamily.fMedium,
    color: colors.white,
    fontSize: fontsize.secondaryHeading,
    textAlign: 'center',
  },
});
export default RankingScreen;
