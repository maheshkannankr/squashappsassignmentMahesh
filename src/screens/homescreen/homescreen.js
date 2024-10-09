import React, {useState} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';

import Header from './header';
import ProfileInfo from './profileinfo';
import Categories from './categories';
import UnfinishedQuiz from './unfinishedquiz';
import {useNavigation} from '@react-navigation/native';

/* const Header = () => {};
const Categories = () => {};
const UnfinishedQuiz = () => {}; */

const SearchBar = ({isDarkMode, searchValue, onChangeSearchText}) => {
  return (
    <rn.View style={styles.searchBarView}>
      <Icons.SearchIcon color={isDarkMode ? colors.white : colors.black} />
      <rn.TextInput
        style={[
          styles.textInputField,
          {
            color: isDarkMode ? colors.white : colors.primaryFont,
          },
        ]}
        value={searchValue}
        onChangeText={onChangeSearchText}
        placeholder={'Search Game'}
        placeholderTextColor={isDarkMode ? colors.white : colors.primaryFont}
      />
    </rn.View>
  );
};
const HomeScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const isDarkMode = rn.useColorScheme() === 'dark';

  const onChangeSearchText = value => {
    setSearchValue(value);
  };

  return (
    <rn.ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}
      contentContainerStyle={{gap: hp(16)}}>
      <Header />
      <ProfileInfo />
      <SearchBar
        searchValue={searchValue}
        isDarkMode={isDarkMode}
        onChangeSearchText={onChangeSearchText}
      />
      <rn.View style={styles.weekelyBannerView}>
        <rn.Image
          source={require('../../../assets/images/homepage/weeklyquizbanner.png')}
          style={styles.weekelyBannerView}
        />
      </rn.View>
      <Categories
        navigation={navigation}
      />
      <UnfinishedQuiz navigation={navigation} />
      <rn.View style={styles.emptyContentView} />
    </rn.ScrollView>
  );
};

const styles = rn.StyleSheet.create({
  emptyContentView: {
    height: hp(70),
  },

  container: {
    flex: 1,
    padding: wp(15),
    width: '100%',
    flexGrow: 1,
  },

  textInputField: {
    width: '100%',
    padding: 0,
    paddingHorizontal: wp(10),
    fontFamily: fontfamily.fRegular,
    fontSize: fontsize.descriptionSize,
  },

  searchBarView: {
    borderWidth: 1,
    padding: wp(15),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(10),
    borderColor: colors.borderColor,
  },

  weekelyBannerView: {
    resizeMode: 'stretch',
    width: '100%',
    shadowColor: '#000',
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: wp(10),
  },

  appNameTextStyle: {
    fontSize: fontsize.appTitle,
  },
});
export default HomeScreen;
