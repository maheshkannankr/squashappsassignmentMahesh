import React, {useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {BackNavHeader, Button, Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {Dropdown} from 'react-native-element-dropdown';
import {
  ageObject,
  favTopicLists,
  genderObject,
  GenderObject,
} from '../../utils';

const SelectionContainer = ({
  value = '',
  selected = false,
  onSelectFavItem,
  index,
}) => {
  const onPressFavItem = () => {
    if (onSelectFavItem) {
      onSelectFavItem(index);
    }
  };
  return (
    <rn.TouchableOpacity
      onPress={onPressFavItem}
      style={[
        styles.favItemContainer,
        {
          backgroundColor: selected
            ? colors.themePrimary
            : colors.favItemCardBackGround,
        },
      ]}>
      <rn.Text
        style={[
          styles.favItemText,
          {
            color: selected ? colors.white : colors.primaryFont,
          },
        ]}>
        {value}
      </rn.Text>
    </rn.TouchableOpacity>
  );
};

const FavTopicScreen = ({navigation}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const [selectedItem, setSelectedItem] = useState([]);

  const onClickNextButton = () => {
    navigation.navigate('tabNavigation');
  };

  const onSelectFavItem = indexValue => {
    if (!selectedItem.includes(indexValue)) {
      setSelectedItem([...selectedItem, indexValue]);
    } else {
      let newArray = selectedItem.filter(i => i !== indexValue);
      setSelectedItem(newArray);
    }
  };

  return (
    <rn.View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <BackNavHeader
        navigation={navigation}
        pageTitle={'Choose Your Favourite Topic'}
      />
      <rn.View style={styles.inputFormContainer}>
        <rn.Image
          source={require('../../../assets/images/favtopic/girl.png')}
        />
      </rn.View>
      <rn.View style={styles.favItemListContainer}>
        {favTopicLists.map((favItem, index) => {
          return (
            <SelectionContainer
              value={favItem.name}
              onSelectFavItem={onSelectFavItem}
              selected={selectedItem.includes(index)}
              key={index}
              index={index}
            />
          );
        })}
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

  favItemContainer: {
    padding: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.favItemCardBackGround,
  },

  inputFormContainer: {
    flex: 4,
    gap: wp(20),
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: wp(30),
    paddingHorizontal: wp(20),
  },

  favItemListContainer: {
    flex: 4,
    gap: wp(20),
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: wp(30),
    justifyContent: 'center',
    paddingHorizontal: wp(20),
  },

  favItemText: {
    fontFamily: fontfamily.fSemiBold,
    color: colors.primaryFont,
    fontSize: fontsize.descriptionSize,
  },

  submitButtonContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default FavTopicScreen;
