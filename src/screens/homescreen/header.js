import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';

const Header = () => {
  const renderAppLogoName = () => {
    return (
      <rn.View style={styles.headerLogoTextContainer}>
        <Icons.AppLogoSmall />
        <rn.Text
          style={[
            styles.appTitleText,
            {color: isDarkMode ? colors.white : colors.primaryFont},
          ]}>
          {appName}
        </rn.Text>
      </rn.View>
    );
  };

  const renderCoinCountView = () => {
    return (
      <rn.View style={styles.coinsView}>
        <rn.View style={{left: wp(-10), position: 'absolute', zIndex: 3}}>
          <Icons.BluePlus />
        </rn.View>
        <rn.View
          elevation={5}
          style={[
            styles.coinCountContainer,
            {
              backgroundColor: isDarkMode
                ? colors.darkTextBg
                : colors.textBackGround,
              shadowColor: isDarkMode ? colors.white : colors.black,
            },
          ]}>
          <rn.Text
            style={[
              styles.coinCountText,
              {color: isDarkMode ? colors.white : colors.primaryFont},
            ]}>
            {50}
          </rn.Text>
        </rn.View>
        <rn.View style={{right: wp(5), position: 'absolute', zIndex: 3}}>
          <Icons.Coin />
        </rn.View>
      </rn.View>
    );
  };
  const isDarkMode = rn.useColorScheme() === 'dark';
  return (
    <rn.View style={styles.headerMainContainer}>
      {renderAppLogoName()}
      {renderCoinCountView()}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  headerMainContainer: {
    flex: 0.1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerLogoTextContainer: {
    alignItems: 'center',
    columnGap: wp(10),
    flexDirection: 'row',
  },
  appTitleText: {
    fontSize: fontsize.headingSize,
  },

  coinsView: {
    paddingRight: wp(20),
    alignItems: 'center',
    flexDirection: 'row',
  },

  coinCountContainer: {
    paddingHorizontal: wp(20),
    shadowOpacity: 1,
    shadowOffset: {height: 5, width: 5},
    shadowRadius: 1,
  },

  coinCountText: {
    fontWeight: 'semibold',
    fontSize: fontsize.descriptionSize,
  },
});

export default Header;
