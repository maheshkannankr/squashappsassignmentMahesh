import React, {useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button} from '../../components';
import fontsize from '../../themes/fontsize';
import {languages} from '../../utils/languages';

const LanguageOptionContainer = ({
  index,
  isDarkMode,
  selectedLangIndex,
  flagAddress,
  languageName,
  onSelectLanguageOption,
}) => {
  const isSelected = selectedLangIndex === index;

  const onSelectLanguage = () => {
    if (onSelectLanguageOption) {
      onSelectLanguageOption(index);
    }
  };
  return (
    <rn.TouchableOpacity
      activeOpacity={1}
      style={[
        styles.singleLangContainer,
        {
          borderColor: isSelected ? colors.themePrimary : colors.borderColor,
          backgroundColor: isDarkMode ? colors.black : colors.white,
        },
      ]}
      onPress={onSelectLanguage}>
      <rn.Image style={[styles.flagImageStyle]} source={{uri: flagAddress}} />
      <rn.Text style={{color: isDarkMode ? colors.white : colors.primaryFont}}>
        {languageName}
      </rn.Text>
    </rn.TouchableOpacity>
  );
};

const LanguageSelectionScreen = ({navigation}) => {
  const [selectedLangIndex, setSelectedLangIndex] = useState(0);

  const onSelectLanguageOption = index => {
    setSelectedLangIndex(index);
  };

  const onClickNextButton = () => {
    navigation.navigate('fillProfileScreen');
  };

  const isDarkMode = rn.useColorScheme() === 'dark';

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader pageTitle={'Select Language'} />
      <rn.View style={styles.langOptionsContainer}>
        {languages.map((lang, index) => (
          <LanguageOptionContainer
            key={index}
            index={index}
            flagAddress={lang.flag}
            languageName={lang.language}
            selectedLangIndex={selectedLangIndex}
            isSelected={false}
            isDarkMode={isDarkMode}
            onSelectLanguageOption={onSelectLanguageOption}
          />
        ))}
      </rn.View>
      <rn.View style={styles.submitButtonContainer}>
        <Button label="Next" onTouchButton={onClickNextButton} />
      </rn.View>
      <rn.View />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  langOptionsContainer: {
    flex: 8,
    gap: wp(10),
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },

  submitButtonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },

  //   Flag Container Styles
  singleLangContainer: {
    width: wp(170),
    rowGap: hp(10),
    borderWidth: 1,
    borderRadius: wp(10),
    alignItems: 'center',
    paddingVertical: hp(20),
    justifyContent: 'center',
  },

  flagImageStyle: {
    resizeMode: 'stretch',
    height: hp(70),
    width: wp(100),
    borderRadius: wp(10),
  },
});
export default LanguageSelectionScreen;
