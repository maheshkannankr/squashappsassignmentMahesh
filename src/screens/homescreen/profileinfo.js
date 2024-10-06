import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';

const ProfileInfo = () => {
  const isDark = rn.useColorScheme() === 'dark';
  const profileName = 'Laurentia';
  const renderGreetingsText = () => {
    return (
      <rn.View style={styles.profileNameTextView}>
        <rn.Text
          style={[
            styles.profileNameText,
            {color: isDark ? colors.white : colors.primaryFont},
          ]}>
          {'Hello'}
        </rn.Text>
        <rn.Text
          style={[
            styles.profileNameText,
            {color: isDark ? colors.white : colors.primaryFont},
          ]}>{`${profileName} !`}</rn.Text>
      </rn.View>
    );
  };

  const renderNotificationView = () => {
    return (
      <rn.View style={styles.notificationViewContainer}>
        <Icons.IniviteFriendLogo color={isDark ? colors.white : colors.black} />
        <Icons.NotificationIcon color={isDark ? colors.white : colors.black} />
      </rn.View>
    );
  };

  return (
    <rn.View style={styles.profileViewMainContainer}>
      {renderGreetingsText()}
      {renderNotificationView()}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  profileViewMainContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileNameTextView: {},

  profileNameText: {
    fontSize: fontsize.buttonText,
    fontFamily: fontfamily.fBold,
  },

  notificationViewContainer: {
    columnGap: wp(15),
    flexDirection: 'row',
  },
});

export default ProfileInfo;
