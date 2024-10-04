import React, {useState} from 'react';
import {wp, hp} from '../utils/dimension';
import {colors} from '../themes';
import * as rn from 'react-native';
import {Icons} from '../components';
import fontsize from '../themes/fontsize';
const RatingView = ({rating = 1, showTotal}) => {
  const starArray = new Array(5).fill(false);
  starArray.fill(true, 0, rating);

  return (
    <rn.View style={styles.starView}>
      {starArray.map((star, index) => {
        return star ? (
          <Icons.RatingStar key={index} />
        ) : (
          <Icons.NegativeRatingStar key={index} />
        );
      })}
      {showTotal && (
        <rn.Text style={styles.ratingTotalText}>{`${rating} / 5`}</rn.Text>
      )}
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  starView: {
    columnGap: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingTotalText: {
    marginLeft: wp(5),
    fontWeight: '800',
    color: colors.white,
    fontSize: fontsize.normalSize,
  },
});

export default RatingView;
