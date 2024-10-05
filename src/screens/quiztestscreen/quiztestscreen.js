import React, {useEffect, useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontsize} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button, Icons} from '../../components';

const QuizTestScreen = () => {
  const [question, setQuestion] = useState('');
  const [options, setOption] = useState([
    {option: ''},
    {option: ''},
    {option: ''},
    {option: ''},
  ]);

  useEffect(() => {
    setQuestion(
      'In which area of the world did the Ancient Mayan population live?',
    );

    setOption([
      {option: '1956'},
      {option: '1994'},
      {option: '2002'},
      {option: '2010'},
    ]);
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);

  const isDarkMode = rn.useColorScheme() === 'dark';

  const renderIndicatorView = () => {
    return <rn.View style={{flex: 0.3, width: '100%'}} />;
  };

  const renderQuestionImageView = () => {
    return (
      <rn.View style={styles.questionImageView}>
        <rn.Text
          style={[
            styles.questionTextStyle,
            {color: isDarkMode ? colors.white : colors.primaryFont},
          ]}>
          {question}
        </rn.Text>
        <rn.Image
          source={require('../../../assets/images/questions/image.png')}
        />
      </rn.View>
    );
  };

  const renderSingleOptionContainer = ({option, isSelected}) => {
    return (
      <rn.View
        style={[
          styles.optionItem,
          {
            backgroundColor: isSelected
              ? colors.selectedOptionBackground
              : isDarkMode
              ? colors.levelCardBackGround
              : colors.white,
          },
        ]}>
        <rn.Text
          style={[
            styles.optionText,
            {color: isDarkMode ? colors.white : colors.primaryFont},
          ]}>
          {option}
        </rn.Text>
        {!isSelected ? (
          <rn.View style={styles.optionUnselectedView} />
        ) : (
          <Icons.MCQOptionSelected />
        )}
      </rn.View>
    );
  };

  const renderMultipleOptionsView = () => {
    return (
      <rn.View style={{flex: 1.5, width: '100%'}}>
        {options.map((option, index) => {
          return (
            <rn.View key={index} style={[styles.singleOptionContainer]}>
              {renderSingleOptionContainer({
                option: option.option,
                isSelected: index === 1,
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
        <Button isEmpty label="Previous" />
        <Button label="Next" />
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
        {renderIndicatorView()}
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
    paddingHorizontal: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  questionImageView: {
    flex: 1.5,
  },

  singleOptionContainer: {flex: 1, width: '100%'},

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
    fontSize: fontsize.descriptionSize,
    fontWeight: 600,
  },

  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    columnGap: wp(10),
    alignItems: 'center',
  },
});
export default QuizTestScreen;
