import React, {useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button, Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {Dropdown} from 'react-native-element-dropdown';
import {ageObject, genderObject, GenderObject} from '../../utils';

const InputContainer = ({
  Logo,
  isDarkMode,
  value = '',
  inputType,
  dropDownData = [],
  onChangeValue = () => {},
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [sampleValue, setValue] = useState(null);

  const onChangeFieldValue = fieldValue => {
    if (onChangeValue) {
      onChangeValue(fieldValue);
    }
  };
  return (
    <rn.View style={styles.inputFieldMainContainer}>
      <Logo color={isDarkMode ? colors.white : colors.black} />
      {inputType === 'text' ? (
        <rn.TextInput
          style={[
            styles.textInputField,
            {
              color: isDarkMode ? colors.white : colors.primaryFont,
            },
          ]}
          value={value}
          onChangeText={onChangeFieldValue}
          placeholder={placeholder}
          placeholderTextColor={isDarkMode ? colors.white : colors.primaryFont}
        />
      ) : (
        <rn.View style={styles.dropDownContainerView}>
          <Dropdown
            style={[
              styles.dropdown,
              {backgroundColor: isDarkMode ? colors.black : colors.white},
            ]}
            placeholderStyle={[
              styles.placeholderStyle,
              {color: isDarkMode ? colors.white : colors.primaryFont},
            ]}
            selectedTextStyle={[
              styles.selectedTextStyle,

              {
                color: isDarkMode ? colors.white : colors.primaryFont,
                backgroundColor: isDarkMode ? colors.black : colors.white,
              },
            ]}
            containerStyle={{
              backgroundColor: isDarkMode ? colors.black : colors.white,
            }}
            activeColor={colors.dropDownSelected}
            data={dropDownData}
            placeholderTextColor
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? placeholder : '...'}
            searchPlaceholder="Search..."
            value={sampleValue}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </rn.View>
      )}
    </rn.View>
  );
};

const FillProfileScreen = ({navigation}) => {
  const [nickName, setNickName] = useState('');
  const isDarkMode = rn.useColorScheme() === 'dark';
  const onClickNextButton = () => {
    navigation.navigate('favTopicScreen');
  };

  const onChangeName = value => {
    setNickName(value);
  };

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader navigation={navigation} pageTitle={'Fill Profile'} />
      <rn.View style={styles.inputFormContainer}>
        <InputContainer
          Logo={Icons.ProfileLogo}
          value={nickName}
          isDarkMode={isDarkMode}
          inputType={'text'}
          placeholder={'Nick Name'}
          onChangeValue={onChangeName}
        />
        <InputContainer
          Logo={Icons.AgeLogo}
          isDarkMode={isDarkMode}
          inputType={'selection'}
          placeholder={'Select Age'}
          dropDownData={ageObject}
        />
        <InputContainer
          Logo={Icons.GenderLogo}
          isDarkMode={isDarkMode}
          inputType={'selection'}
          placeholder={'Select Gender'}
          dropDownData={genderObject}
        />
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

  inputFieldMainContainer: {
    borderWidth: 1,
    padding: wp(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(10),
    borderColor: colors.borderColor,
  },

  inputFormContainer: {
    flex: 8,
    gap: wp(20),
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: wp(30),
    paddingHorizontal: wp(20),
  },

  submitButtonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  //   Flag Container Styles

  textInputField: {
    width: '100%',
    padding: 0,
    paddingHorizontal: wp(10),
  },

  dropDownContainerView: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 0,
  },

  dropdown: {
    width: '100%',
    paddingHorizontal: wp(10),
  },
});
export default FillProfileScreen;
