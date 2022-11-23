/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavBarLogin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarLogin")}
    >
      <Text
        fontFamily="M PLUS 2"
        fontSize="20px"
        fontWeight="100"
        color="rgba(0,0,0,1)"
        lineHeight="28.959999084472656px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.15px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 14.5px - -0.5px)"
        left="1087px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="LOGIN"
        {...getOverrideProps(overrides, "LOGIN")}
      ></Text>
      <Text
        fontFamily="M PLUS 2"
        fontSize="20px"
        fontWeight="100"
        color="rgba(0,0,0,1)"
        lineHeight="28.959999084472656px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.15px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 14.5px - -0.5px)"
        left="1182px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="REGISTER"
        {...getOverrideProps(overrides, "REGISTER")}
      ></Text>
      <Icon
        width="22px"
        height="23px"
        viewBox={{ minX: 0, minY: 0, width: 22, height: 23 }}
        paths={[
          {
            d: "M11.737 21.4747L11 22.2132L9.405 20.6153C3.74 14.9621 0 11.2216 0 6.65789C0 2.91737 2.662 0 6.05 0C7.964 0 9.801 0.980526 11 2.51789C12.199 0.980526 14.036 0 15.95 0C19.338 0 22 2.91737 22 6.65789C22 8.38895 21.45 9.99895 20.482 11.6332C19.8 11.27 19.041 11.0279 18.249 10.9432C19.25 9.44211 19.8 8.05 19.8 6.65789C19.8 4.23684 18.15 2.42105 15.95 2.42105C14.256 2.42105 12.606 3.63158 12.023 5.27789L9.977 5.27789C9.394 3.63158 7.744 2.42105 6.05 2.42105C3.85 2.42105 2.2 4.23684 2.2 6.65789C2.2 10.1563 5.654 13.6063 10.879 18.8237L11 18.9447L11.044 18.8963C11.132 19.8163 11.374 20.6879 11.737 21.4747ZM16.5 13.3158L16.5 16.9474L13.2 16.9474L13.2 19.3684L16.5 19.3684L16.5 23L18.7 23L18.7 19.3684L22 19.3684L22 16.9474L18.7 16.9474L18.7 13.3158L16.5 13.3158Z",
            fill: "rgba(186,173,138,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 11.5px - -3.5px)"
        left="calc(50% - 11px - -605px)"
        {...getOverrideProps(overrides, "heart")}
      ></Icon>
      <Flex
        gap="10px"
        direction="row"
        width="34px"
        height="26px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="23px"
        left="1355px"
        padding="0px 2px 0px 2px"
        {...getOverrideProps(overrides, "basket")}
      >
        <Icon
          width="24px"
          height="26px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 26 }}
          paths={[
            {
              d: "M10.7463 0L10.7463 4.72727L8.35821 4.72727L13.1343 9.45455L17.9104 4.72727L15.5224 4.72727L15.5224 0M0 2.36364L0 4.72727L2.38806 4.72727L6.68657 13.7091L5.01493 16.5455C4.89552 16.9 4.77612 17.2545 4.77612 17.7273C4.77612 19.0273 5.85075 20.0909 7.16418 20.0909L21.4925 20.0909L21.4925 17.7273L7.64179 17.7273C7.52239 17.7273 7.40298 17.6091 7.40298 17.4909L7.40298 17.3727L8.47761 15.3636L17.3134 15.3636C18.1493 15.3636 18.9851 14.8909 19.3433 14.1818L24 5.90909L21.9701 4.72727L17.3134 13L8.95522 13L3.9403 2.36364M7.16418 21.2727C5.85075 21.2727 4.77612 22.3364 4.77612 23.6364C4.77612 24.9364 5.85075 26 7.16418 26C8.47761 26 9.55224 24.9364 9.55224 23.6364C9.55224 22.3364 8.47761 21.2727 7.16418 21.2727ZM19.1045 21.2727C17.791 21.2727 16.7164 22.3364 16.7164 23.6364C16.7164 24.9364 17.791 26 19.1045 26C20.4179 26 21.4925 24.9364 21.4925 23.6364C21.4925 22.3364 20.4179 21.2727 19.1045 21.2727Z",
              fill: "rgba(186,173,138,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </Flex>
      <Icon
        width="30px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1, height: 30 }}
        paths={[
          {
            d: "M0 0L30 0L30 -1L0 -1L0 0Z",
            stroke: "rgba(186,173,138,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="23px"
        left="1171px"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
    </View>
  );
}
