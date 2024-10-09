import React, {useEffect, useRef} from 'react';
import {colors, fontfamily, fontsize} from '../../themes';
import * as rn from 'react-native';
import {Easing} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Polygon = ({pointValue, rank}) => {
  const rankTextRef = useRef(null);
  const pointTextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (rankTextRef.current && pointTextRef.current) {
        rankTextRef.current.animate(
          {
            0: {scale: 0},
            1: {scale: 1},
          },
          2000,
          Easing.bounce,
        ); // duration is 1000ms
        pointTextRef.current.animate(
          {
            0: {scale: 0},
            1: {scale: 1},
          },
          1000,
        );
      }
    }, 3000);
  }, []);
  return (
    <rn.View style={styles.diamond}>
      <Animatable.Text
        ref={rankTextRef}
        duration={400}
        style={styles.rankTextStyle}>
        {rank}
      </Animatable.Text>
      <Animatable.Text
        ref={pointTextRef}
        duration={1000}
        style={styles.pointTextStyle}>
        {pointValue}
      </Animatable.Text>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  diamond: {
    width: 100,
    height: 150,
    elevation: 15,
    backgroundColor: colors.rankStandingBgColor,
  },
  rankTextStyle: {
    fontFamily: fontfamily.fExtraBold,
    fontSize: fontsize.rankText,
    color: colors.white,
    textAlign: 'center',
    transform: [{scale: 0}],
  },
  pointTextStyle: {
    fontFamily: fontfamily.fMedium,
    color: colors.white,
    fontSize: fontsize.secondaryHeading,
    textAlign: 'center',
    transform: [{scale: 0}],
  },
});

export default Polygon;
