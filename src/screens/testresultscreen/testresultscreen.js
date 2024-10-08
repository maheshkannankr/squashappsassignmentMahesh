import React, {useEffect} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button, Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';
import * as Progress from 'react-native-progress';

const TestResultScreen = ({route, navigation}) => {
  const {correctAnswersCount, questionSetWithSelectedAnswer} = route?.params;

  const isDarkMode = rn.useColorScheme() === 'dark';

  const onPressReviewAnswersButton = () => {
    navigation.navigate('quizTestScreen', {
      reviewAnswers: questionSetWithSelectedAnswer,
      reviewTime: true,
    });
  };
  const onPressPlayAgainButton = () => {
    navigation.replace('quizTestScreen');
  };

  const renderPercentageView = () => {
    return (
      <rn.View style={styles.progressView}>
        <Progress.Circle
          size={200}
          progress={correctAnswersCount / 10}
          color={colors.themePrimary}
          unfilledColor={colors.borderColor}
          borderWidth={0}
          endAngle={0.9}
          thickness={30}
          strokeCap="round"
          textStyle={styles.progressTextStyle}
        />
        <rn.View style={styles.progressCenterView}>
          <rn.Text style={styles.progressTextStyle}>{`${
            correctAnswersCount * 10
          } %`}</rn.Text>
        </rn.View>
      </rn.View>
    );
  };
  const renderResultDetailsView = ({testResult = 0}) => {
    const renderSinglePointsView = ({...props}) => {
      return (
        <rn.View style={styles.singlePointsContainer}>
          <rn.View style={styles.valueLabelContainer}>
            <rn.Text
              style={[
                styles.pointValueTextStyle,
                {color: isDarkMode ? colors.white : colors.primaryFont},
              ]}>
              {props.pointText}
            </rn.Text>
            {props.valueLabel}
          </rn.View>
          <rn.Text
            style={[
              styles.pointLabelTextStyle,
              {color: isDarkMode ? colors.white : colors.primaryFont},
            ]}>
            {props.pointLabel}
          </rn.Text>
        </rn.View>
      );
    };
    return (
      <rn.View style={styles.resultView}>
        <rn.Text
          style={[
            styles.resultTextStyle,
            {color: isDarkMode ? colors.white : colors.primaryFont},
          ]}>
          {testResult < 4 ? 'Test Failed' : 'Test Passed'}
        </rn.Text>
        <rn.View style={styles.resultPointsContainerView}>
          {renderSinglePointsView({
            pointText: `${correctAnswersCount} / 10`,
            pointLabel: 'Results',
          })}
          {renderSinglePointsView({
            pointText: '20',
            valueLabel: <Icons.Coin />,
            pointLabel: 'Earn',
          })}
          {renderSinglePointsView({pointText: '19 : 20', pointLabel: 'Time'})}
        </rn.View>
      </rn.View>
    );
  };
  const renderButtonsView = () => {
    return (
      <rn.View style={styles.buttonsView}>
        <Button
          isEmpty
          label="Review Answer"
          labelChildren={<Icons.ReviewEyeIcon />}
          onTouchButton={onPressReviewAnswersButton}
        />
        <Button
          label="Play Again"
          labelChildren={<Icons.ReplayIcon />}
          onTouchButton={onPressPlayAgainButton}
        />
      </rn.View>
    );
  };

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader
        navigation={navigation}
        pageTitle={
          correctAnswersCount > 4 ? 'Congratulation!' : 'Better Luck Next Time!'
        }
      />
      {renderPercentageView()}
      {renderResultDetailsView({testResult: correctAnswersCount})}
      {renderButtonsView()}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    gap: hp(16),
    width: '100%',
    height: '100%',
    padding: wp(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  progressTextStyle: {
    fontFamily: fontfamily.fExtraBold,
    fontSize: fontsize.appTitle,
    color: colors.primaryFont,
  },

  resultView: {
    flex: 2,
  },

  resultPointsContainerView: {
    flex: 1,
    columnGap: wp(10),
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  singlePointsContainer: {
    flex: 1,
    rowGap: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

  valueLabelContainer: {
    columnGap: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pointValueTextStyle: {
    fontFamily: fontfamily.fBold,
    fontSize: fontsize.levelCardLevelText,
  },
  pointLabelTextStyle: {
    fontSize: fontsize.secondaryHeading,
    fontFamily: fontfamily.fRegular,
  },

  resultTextStyle: {
    textAlign: 'center',
    fontSize: fontsize.headingSize,
    fontFamily: fontfamily.fBold,
  },

  progressView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressCenterView: {
    backgroundColor: 'white',
    width: 140,
    height: 140,
    elevation: 20,
    borderRadius: wp(100),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsView: {
    flex: 1,
    width: '100%',
    rowGap: wp(20),
  },
});
export default TestResultScreen;
