/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { button: {}, Button_default: {}, Button: {} },
      variantValues: { color: "default" },
    },
    {
      overrides: {
        button: { height: "58px", backgroundColor: "rgba(186,173,138,1)" },
        Button_default: { top: "17px", left: "62px", children: "Button_hover" },
        Button: {},
      },
      variantValues: { color: "hover" },
    },
    {
      overrides: {
        button: { height: "55px", backgroundColor: "rgba(0,0,0,1)" },
        Button_default: {
          color: "rgba(255,255,255,1)",
          top: "16px",
          left: "51px",
          children: "Button_pressed",
        },
        Button: {},
      },
      variantValues: { color: "pressed" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="261px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Button")}
    >
      <View
        width="261px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        borderRadius="30px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "button")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.3799991607666px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="18px"
        left="55px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button_default"
        {...getOverrideProps(overrides, "Button_default")}
      ></Text>
    </View>
  );
}
