import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily, fontsize} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button, Icons} from '../../components';
import {quizQuestions} from '../../utils';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const QuizTestScreen = ({route, navigation}) => {
  const reviewAnswers = route?.params;

  const [{question, options, image}, setQuestionsOptions] = useState({
    question: '',
    options: ['', '', '', ''],
    image: null,
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedOption, setSelectedOption] = useState(null);

  const questionsSet = quizQuestions;

  const questionSetWithSelectedAnswer = useRef(quizQuestions);

  useEffect(() => {
    getCurrentIndexQuestions(currentQuestionIndex);
  }, [getCurrentIndexQuestions, currentQuestionIndex]);

  const getCurrentIndexQuestions = useCallback(
    index => {
      setQuestionsOptions(prevState => ({
        ...prevState,
        question: questionsSet[index].question,
        options: questionsSet[index].options,
        image: questionsSet[index].image,
      }));
    },
    [questionsSet],
  );

  const onPressNextButton = () => {
    setSelectedOption(null);
    let currentIndex = currentQuestionIndex;
    if (currentIndex < 9) {
      setCurrentQuestionIndex(currentIndex + 1);
      getCurrentIndexQuestions(currentIndex);
    }
  };

  const getCorrectAnswersCount = () => {
    let totalCorrectAnswers = 0;
    for (let i = 0; i < questionSetWithSelectedAnswer.current.length; i++) {
      let ques = questionSetWithSelectedAnswer.current[i];
      if (
        ques.hasOwnProperty('selectedAnswer') &&
        ques.selectedAnswer === ques.answer
      ) {
        totalCorrectAnswers += 1;
      }
    }
    return totalCorrectAnswers;
  };

  const onPressSubmitButton = async () => {
    const correctAnswersCount = await getCorrectAnswersCount();
    navigation.replace('testResultScreen', {
      correctAnswersCount,
      questionSetWithSelectedAnswer,
    });
  };

  const onPressPrevButton = () => {
    setSelectedOption(null);
    let currentIndex = currentQuestionIndex;
    if (currentIndex > 0) {
      setCurrentQuestionIndex(currentIndex - 1);
      getCurrentIndexQuestions(currentIndex);
    }
  };

  const onSelectOption = optionIndex => {
    questionSetWithSelectedAnswer.current[currentQuestionIndex].selectedAnswer =
      options[optionIndex];
    setSelectedOption(optionIndex);
  };

  const isDarkMode = rn.useColorScheme() === 'dark';

  const renderIndicatorView = ({currentIndex = 0}) => {
    return (
      <rn.View style={styles.quizProgressContainerView}>
        {new Array(10).fill(' ').map((item, index) => {
          return (
            <rn.View
              key={index}
              style={[
                styles.quizProgressView,

                {
                  backgroundColor:
                    index <= currentIndex
                      ? colors.themePrimary
                      : colors.borderColor,
                },
              ]}
            />
          );
        })}
      </rn.View>
    );
  };

  const renderQuestionImageView = () => {
    return (
      <rn.View style={styles.questionImageView}>
        <rn.Text
          style={[
            styles.questionTextStyle,
            {color: isDarkMode ? colors.white : colors.primaryFont},
          ]}>
          {question ? question : ''}
        </rn.Text>
        {image && <rn.Image style={styles.quizImgContainer} source={image} />}
      </rn.View>
    );
  };

  const getOptionBGColor = state => {
    let color = '';
    switch (state) {
      case 'Selected':
        color = colors.selectedOptionBackground;
        break;
      case 'CorrectAnswer':
        color = colors.correctAnswerBackground;
        break;
      case 'InCorrectAnswer':
        color = colors.incorrectAnsBackGround;
        break;
      default:
        color = isDarkMode ? colors.darkTextBg : colors.white;
    }
    return color;
  };

  const getOptionIcon = state => {
    switch (state) {
      case 'Selected':
        return <Icons.MCQOptionSelected />;

      case 'CorrectAnswer':
        return <Icons.CorrectOptionIcon />;

      case 'InCorrectAnswer':
        return <Icons.WrongOptionIcon />;

      default:
        return <rn.View style={styles.optionUnselectedView} />;
    }
  };

  const renderSingleOptionContainer = ({
    option,
    isSelected,
    index,
    reviewSelectedAnswer,
    correctAnswer,
  }) => {
    let optionState = '';
    if (isSelected) {
      optionState = 'Selected';
    } else if (
      option === reviewSelectedAnswer &&
      reviewSelectedAnswer === correctAnswer
    ) {
      optionState = 'CorrectAnswer';
    } else if (
      option === reviewSelectedAnswer &&
      reviewSelectedAnswer !== correctAnswer
    ) {
      optionState = 'InCorrectAnswer';
    } else if (option === correctAnswer) {
      optionState = 'CorrectAnswer';
    }
    return (
      <rn.TouchableOpacity
        activeOpacity={reviewAnswers?.reviewTime ? 1 : 0.5}
        style={[
          styles.optionItem,
          {
            backgroundColor: getOptionBGColor(optionState),
          },
        ]}
        onPress={() => !reviewAnswers?.reviewTime && onSelectOption(index)}>
        <rn.Text
          style={[
            styles.optionText,
            {
              color: isDarkMode ? colors.white : colors.primaryFont,
              fontFamily: isSelected
                ? fontfamily.fSemiBold
                : fontfamily.fRegular,
            },
          ]}>
          {option}
        </rn.Text>
        {getOptionIcon(optionState)}
      </rn.TouchableOpacity>
    );
  };

  const renderMultipleOptionsView = () => {
    return (
      <rn.View style={{flex: 1.5, width: '100%'}}>
        {options.map((option, index) => {
          return (
            <rn.View key={index} style={[styles.singleOptionContainer]}>
              {renderSingleOptionContainer({
                option: option,
                isSelected: index === selectedOption,
                index,
                reviewSelectedAnswer:
                  reviewAnswers?.reviewAnswers?.current[currentQuestionIndex]
                    ?.selectedAnswer,
                correctAnswer:
                  reviewAnswers?.reviewAnswers?.current[currentQuestionIndex]
                    ?.answer,
              })}
            </rn.View>
          );
        })}
      </rn.View>
    );
  };
  const renderButtonsView = () => {
    return (
      <rn.View style={styles.buttonContainer}>
        <Button
          isEmpty
          label="Previous"
          onTouchButton={onPressPrevButton}
          isDisabled={currentQuestionIndex === 0}
        />
        <Button
          label={currentQuestionIndex === 9 ? 'Submit' : 'Next'}
          onTouchButton={
            currentQuestionIndex === 9 ? onPressSubmitButton : onPressNextButton
          }
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
      <BackNavHeader navigation={navigation} pageTitle={'Level 2'} />
      <rn.View style={styles.quizTestContainer}>
        {renderIndicatorView({currentIndex: currentQuestionIndex})}
        {renderQuestionImageView()}
        {renderMultipleOptionsView()}
        {renderButtonsView()}
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
    padding: wp(10),
  },

  quizTestContainer: {
    flex: 10,
    width: '100%',
    height: '100%',
    rowGap: wp(10),
    paddingHorizontal: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  questionImageView: {
    flex: 1.5,
    rowGap: wp(10),
    width: '100%',
  },

  quizImgContainer: {
    flex: 1,
    width: '100%',
    borderRadius: wp(30),
    resizeMode: 'stretch',
  },

  quizProgressView: {
    height: wp(5),
    flex: 1,
    borderRadius: wp(10),
  },

  quizProgressContainerView: {
    flex: 0.1,
    width: '100%',
    columnGap: wp(2),
    flexDirection: 'row',
  },

  singleOptionContainer: {
    flex: 1,
    width: '100%',
  },

  optionItem: {
    width: '100%',
    elevation: 2,
    padding: wp(15),
    borderRadius: wp(10),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  optionText: {
    fontSize: fontsize.descriptionSize,
  },

  optionUnselectedView: {
    width: wp(17),
    height: wp(17),
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: '#000',
  },

  questionTextStyle: {
    fontSize: fontsize.secondaryHeading,
    fontWeight: 600,
    flex: 0.3,
    marginHorizontal: wp(5),
    fontFamily: fontfamily.fSemiBold,
  },

  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    columnGap: wp(10),
    alignItems: 'center',
  },
});
export default QuizTestScreen;
