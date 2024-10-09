import React, {useEffect, useRef, useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily, fontsize} from '../../themes';
import * as rn from 'react-native';
import {Easing} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {BackNavHeader} from '../../components';

import RankCard from './rankcard';

import Polygon from './polygonshape';

const RankingScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const viewRef1 = useRef(null);
  const viewRef2 = useRef(null);
  const viewRef3 = useRef(null);

  const [tabIndex, setTabIndex] = useState(0);

  // This is effect is to animate the Rank Polygon on loading please use seperate use effect for others
  useEffect(() => {
    if (viewRef1.current && viewRef2.current && viewRef3.current) {
      viewRef1.current.animate(
        {
          0: {height: 50}, // Starting height
          1: {height: 150}, // Ending height
        },
        2000,
      );
      viewRef2.current.animate(
        {
          0: {height: 50},
          1: {height: 150},
        },
        1000,
      );
      viewRef3.current.animate(
        {
          0: {height: 50},
          1: {height: 150},
        },
        3000,
      );
    }
  });

  const renderTabSwitchView = () => {
    const tabItems = ['Weekly', 'All Time'];
    return (
      <rn.View style={styles.tabSwitchView}>
        {tabItems.map((item, index) => {
          return (
            <rn.TouchableOpacity
              key={index}
              onPress={() => {
                setTabIndex(index);
              }}
              style={
                index === tabIndex
                  ? styles.tabSwitchItemSelectedContainer
                  : styles.tabSwitchItemContainer
              }>
              <rn.Text style={styles.tabswitchItemText}>{item}</rn.Text>
            </rn.TouchableOpacity>
          );
        })}
      </rn.View>
    );
  };
  const renderRankStandingsView = () => {
    return (
      <rn.View style={styles.rankStandingsView}>
        <Animatable.View ref={viewRef1} duration={1500} style={styles.polygon1}>
          {/*           <rn.View style={styles.photoViewContainerStyle}>
            <rn.Image
              style={styles.photoViewStyle}
              source={require('../../../assets/images/profile/placehoder.jpg')}
            />
          </rn.View> */}
          <Polygon pointValue={2900} rank={2} />
        </Animatable.View>
        <Animatable.View ref={viewRef2} duration={1000} style={styles.polygon2}>
          <Polygon pointValue={3000} rank={1} />
        </Animatable.View>
        <Animatable.View ref={viewRef3} duration={2000} style={styles.polygon3}>
          <Polygon pointValue={2860} rank={3} />
        </Animatable.View>
      </rn.View>
    );
  };

  const renderRankTableView = () => {
    return (
      <rn.View
        style={[
          styles.rankTableView,
          {backgroundColor: isDarkMode ? colors.black : colors.white},
        ]}>
        <rn.View
          style={[
            styles.rankTableInnerView,
            {backgroundColor: isDarkMode ? colors.black : colors.white},
          ]}>
          <RankCard
            name={'John Snow'}
            index={4}
            point={2600}
            photo={require('../../../assets/images/profile/placehoder.jpg')}
          />
          <RankCard
            name={'Arya Stark'}
            index={5}
            point={2600}
            photo={require('../../../assets/images/profile/placehoder.jpg')}
          />
          <RankCard
            name={'Tyrion Lannister'}
            index={6}
            point={2600}
            photo={require('../../../assets/images/profile/placehoder.jpg')}
          />
          <RankCard
            name={'Daenerys Targaryen Targaryen'}
            index={15}
            selected={true}
            point={2600}
            photo={require('../../../assets/images/profile/placehoder.jpg')}
          />
        </rn.View>
      </rn.View>
    );
  };
  const renderBlankSpace = () => {
    return (
      <rn.View
        style={[
          styles.blankSpaceView,
          {backgroundColor: isDarkMode ? colors.black : colors.white},
        ]}
      />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  tabSwitchItemSelectedContainer: {
    elevation: 4,
    padding: wp(10),
    paddingHorizontal: wp(50),
    borderRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.rankStandingBgColor,
  },

  tabswitchItemText: {
    fontfamily: fontfamily.fExtraBold,
    fontSize: fontsize.secondaryHeading,
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
    paddingHorizontal: wp(80),
    alignSelf: 'center',
    borderTopLeftRadius: wp(500),
    borderTopRightRadius: wp(500),
    alignItems: 'center',
  },

  rankTableInnerView: {
    flex: 1,
    width: '100%',
    rowGap: wp(10),
    alignSelf: 'center',
    paddingTop: wp(100),
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
  photoViewContainerStyle: {
    width: '100%',
    alignItems: 'center',
    borderRadius: wp(100),
  },

  photoViewStyle: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1,
    borderRadius: wp(50),
  },
});
export default RankingScreen;
