import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {Icons, QuizLevelCard} from '../../components';
import fontsize from '../../themes/fontsize';

const UnfinishedQuiz = () => {
  const isDark = rn.useColorScheme() === 'dark';

  const renderHeadingView = () => {
    return (
      <rn.View style={styles.headingView}>
        <rn.Text
          style={[
            styles.unFinishedHeadingText,
            {color: isDark ? colors.white : colors.primaryFont},
          ]}>
          {'UnFinished Quiz'}
        </rn.Text>
        <rn.Text style={styles.unFinishedSeeAllText}>{'See All'}</rn.Text>
      </rn.View>
    );
  };

  const renderUnFinishedContentView = () => {
    return (
      <rn.View style={styles.cardContainer}>
        <QuizLevelCard />
        <QuizLevelCard />
        <QuizLevelCard />
      </rn.View>
    );
  };
  return (
    <rn.View style={styles.cardContainer}>
      {renderHeadingView()}
      {renderUnFinishedContentView()}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  headingView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  unFinishedHeadingText: {
    fontSize: fontsize.buttonText,
    fontFamily: fontfamily.fBold,
  },

  unFinishedSeeAllText: {
    fontSize: fontsize.descriptionSize,
    color: colors.themePrimary,
    fontFamily: fontfamily.fRegular,
  },

  cardContainer: {
    rowGap: wp(10),
  },
});

export default UnfinishedQuiz;
