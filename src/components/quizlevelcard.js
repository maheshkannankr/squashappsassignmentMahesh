import React from 'react';
import * as rn from 'react-native';
import {Button, Icons, RatingView} from '../components';
import fontsize from '../themes/fontsize';
import {colors, fontfamily} from '../themes';
import {hp, wp} from '../utils/dimension';

const QuizLevelCard = ({
  category = 'History',
  level = 1,
  onPressQuizCard = () => {},
}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const renderLeftSideView = () => {
    return (
      <rn.View style={styles.cardLeft}>
        <rn.Text style={styles.categoryTextStyle}>{category}</rn.Text>
        <rn.View style={styles.LevelRatingView}>
          <rn.Text
            style={[
              styles.levelTextStyle,
              {color: isDarkMode ? colors.white : colors.black},
            ]}>{`Level ${level}`}</rn.Text>
          <RatingView />
        </rn.View>
        <rn.View>
          <rn.View style={styles.progressView} />
          <rn.View style={styles.progressViewRailView} />
        </rn.View>
      </rn.View>
    );
  };

  const renderRightSide = () => {
    return (
      <rn.View style={styles.cardRight}>
        <rn.Text
          style={[
            styles.timerTextStyle,
            {color: isDarkMode ? colors.white : colors.black},
          ]}>
          {'15h 30m left'}
        </rn.Text>
        <rn.View style={styles.buttonViewStyle}>
          <rn.Text style={styles.buttonTextStyle}>{'Play Now'}</rn.Text>
        </rn.View>
      </rn.View>
    );
  };
  return (
    <rn.TouchableOpacity
      onPress={onPressQuizCard}
      activeOpacity={0.8}
      style={[
        styles.cardContainer,
        {
          backgroundColor: isDarkMode
            ? colors.levelCardBackGround
            : colors.white,
        },
      ]}>
      {renderLeftSideView()}
      {renderRightSide()}
    </rn.TouchableOpacity>
  );
};

const styles = rn.StyleSheet.create({
  cardContainer: {
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(10),
    borderRadius: wp(10),
    shadowColor: '#000',
    elevation: 2,
    margin: wp(3),
    justifyContent: 'space-between',
  },

  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: fontsize.headingSize,
  },

  categoryTextStyle: {
    fontSize: fontsize.normalSize,
    color: colors.themePrimary,
    fontFamily: fontfamily.fBold,
  },

  LevelRatingView: {
    flexDirection: 'row',
    gap: wp(10),
    alignItems: 'center',
  },

  levelTextStyle: {
    fontSize: fontsize.levelCardLevelText,
    fontFamily: fontfamily.fBold,
  },

  progressView: {
    zIndex: 1,
    width: wp((15 / 30) * 100),
    height: hp(5),
    borderRadius: wp(10),
    position: 'absolute',
    backgroundColor: colors.themePrimary,
  },

  progressViewRailView: {
    width: '100%',
    height: hp(5),
    borderRadius: wp(10),
    backgroundColor: colors.textBackGround,
  },

  cardRight: {
    flex: 0.7,
    rowGap: wp(10),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  timerTextStyle: {
    fontSize: fontsize.normalSize,
    fontFamily: fontfamily.fRegular,
  },

  buttonViewStyle: {
    width: '100%',
    padding: wp(5),
    borderRadius: wp(10),
    backgroundColor: colors.themePrimary,
  },

  buttonTextStyle: {
    textAlign: 'center',
    fontSize: fontsize.secondaryHeading,
    color: colors.white,
    fontFamily: fontfamily.fBold,
  },
});
export default QuizLevelCard;
