import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';
import {BackNavHeader} from '../../components';

const RankingScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';
  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader pageTitle={'Ranking'} />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(16),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default RankingScreen;
