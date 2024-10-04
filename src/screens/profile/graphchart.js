/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {wp, hp} from '../../utils/dimension';
import {colors} from '../../themes';
import * as rn from 'react-native';
import {Icons} from '../../components';
import fontsize from '../../themes/fontsize';
import {appName} from '../../utils';
import {BarChart} from 'react-native-gifted-charts';

const GraphChart = () => {
  const isDarkMode = rn.useColorScheme() === 'dark';

  const data = [
    {value: 30, frontColor: '#FFB9F1', label: '3/10'},
    {value: 60, frontColor: '#FF85E7', label: '3/10'},
    {value: 80, frontColor: '#ED03BF', label: '3/10'},
  ];

  return (
    <rn.View style={styles.graphMainContainer}>
      <BarChart
        data={data}
        spacing={50}
        height={130}
        width={250}
        noOfSections={4}
        yAxisThickness={0}
        xAxisThickness={0}
        color={colors.themePrimary}
        curved={true}
        barBorderRadius={8}
        yAxisIndicesColor={isDarkMode ? colors.white : colors.secondaryFont}
        xAxisLabelTextStyle={{
          fontWeight: '900',
          color: isDarkMode ? colors.white : colors.secondaryFont,
          textAlign: 'center',
        }}
      />
    </rn.View>
  );
};

const styles = rn.StyleSheet.create({
  graphMainContainer: {
    flex: 2,
  },
});

export default GraphChart;
