import React, {useEffect, useRef} from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors, fontfamily, fontsize} from '../../themes';
import * as rn from 'react-native';

const RankCard = ({photo, name, point = 0, index, selected = false}) => {
  const isDarkMode = rn.useColorScheme() === 'dark';
  return (
    <rn.View
      style={[
        styles.rankCardContainer,
        {
          backgroundColor: selected
            ? colors.themePrimary
            : isDarkMode
            ? colors.darkTextBg
            : colors.borderColor,
        },
      ]}>
      <rn.Text
        style={[
          styles.rankTextStyle,
          {
            color: selected
              ? colors.white
              : isDarkMode
              ? colors.white
              : colors.primaryFont,
          },
        ]}>
        {index}
      </rn.Text>
      <rn.View style={styles.photoViewContainerStyle}>
        <rn.Image style={styles.photoViewStyle} source={photo} />
      </rn.View>
      <rn.Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={[
          styles.nameTextStyle,
          {
            color: selected
              ? colors.white
              : isDarkMode
              ? colors.white
              : colors.primaryFont,
          },
        ]}>
        {name}
      </rn.Text>
      <rn.Text
        style={[
          styles.pointTextStyle,
          {
            color: selected
              ? colors.white
              : isDarkMode
              ? colors.white
              : colors.primaryFont,
          },
        ]}>{`${point}pt`}</rn.Text>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  rankCardContainer: {
    flex: 1,
    width: '100%',
    gap: wp(10),
    padding: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(15),
    justifyContent: 'flex-start',
  },

  rankTextStyle: {
    flex: 1,
    fontSize: fontsize.descriptionSize,
    fontFamily: fontfamily.fBold,
  },
  nameTextStyle: {
    flex: 10,
    fontSize: fontsize.descriptionSize,
    fontFamily: fontfamily.fBold,
  },

  pointTextStyle: {
    flex: 4,
    fontSize: fontsize.descriptionSize,
    fontFamily: fontfamily.fMedium,
  },

  photoViewContainerStyle: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    borderRadius: wp(100),
  },

  photoViewStyle: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 1,
    borderRadius: wp(50),
  },
});

export default RankCard;
