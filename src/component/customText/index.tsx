import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  darkTextColor,
  textGrey,
  aspectWidth,
  SourceSansProRegular,
  SourceSansProSemiBold,
} from '../../constants';
import { CustomTextProps } from '../../types';

/***
 * CustomText Component for Text
 */
const CustomText: React.FC<CustomTextProps> = ({
  title,
  fontSize = aspectWidth * 16,
  color,
  fontFamily = SourceSansProRegular,
  textStyle,
  isBold = false,
  lineHeight,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.defaultStyle,
        {
          fontSize: fontSize,
          color: color ? color : textGrey,
          fontFamily: isBold ? SourceSansProSemiBold : fontFamily,
          lineHeight: lineHeight ? lineHeight : 20,
        },
        textStyle,
      ]}
      {...props}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: aspectWidth * 16,
    lineHeight: 20,
    textAlign: 'center',
    color: darkTextColor,
    fontFamily: SourceSansProRegular,
  },
});

export default CustomText;
