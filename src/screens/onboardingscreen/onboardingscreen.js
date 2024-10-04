/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import Carousel from 'react-native-reanimated-carousel';
import MessageViaMedia from './messageviamedia';

const OnBoardingScreen = () => {
  const isDarkMode = rn.useColorScheme() === 'dark';
  const width = rn.Dimensions.get('window').width;

  const detailsArray = [
    {
      index: 0,
      imageAddresses: require('../../../assets/images/onboardingpage/onboardingimage1.png'),
      headingContent: 'Test Your Knowledge & Challenge Yourself!',
      descContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      index: 1,
      imageAddresses: require('../../../assets/images/onboardingpage/onboardingimage2.png'),
      headingContent: 'Challenge Your Mind, One Question at a Time!',
      descContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      index: 2,
      imageAddresses: require('../../../assets/images/onboardingpage/onboardingimage3.png'),
      headingContent: 'Discover the Fun of Learning Level Up Your Knowledge!',
      descContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <Carousel
        width={width}
        height={width}
        autoPlay={false}
        data={detailsArray}
        pagingEnabled={true}
        scrollAnimationDuration={1000}
        renderItem={({index}) => {
          return (
            <MessageViaMedia
              imgAddress={detailsArray[index].imageAddresses}
              headingContent={detailsArray[index].headingContent}
              descContent={detailsArray[index].descContent}
            />
          );
        }}
      />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default OnBoardingScreen;
