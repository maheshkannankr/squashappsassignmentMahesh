import * as rn from 'react-native';
import React from 'react';
import {colors, fontsize} from '../../themes';

const MessageViaMedia = ({index, imgAddress, headingContent, descContent}) => {
  return (
    <rn.View>
      <rn.Image source={imgAddress} />
      <rn.View />
      <rn.Text style={styles.headingContentTextStyle}>{headingContent}</rn.Text>
      <rn.Text style={styles.descContentTextStyle}>{descContent}</rn.Text>
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  headingContentTextStyle: {
    color: colors.primaryFont,
    fontSize: fontsize.headingSize,
  },
  descContentTextStyle: {
    color: colors.secondaryFont,
    fontSize: fontsize.descriptionSize,
  },
});

export default MessageViaMedia;
