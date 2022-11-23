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
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function Dropdownlist(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 46478": {},
        "some text6479": {},
        "item 3": { display: "block" },
        "Rectangle 46481": { backgroundColor: "rgba(186,173,138,1)" },
        "some text6482": {},
        "item 2": { display: "block" },
        "Rectangle 2": {},
        "some text6485": {},
        "item 1": { display: "block" },
        "placeholder container": {},
        placeholder6489: {},
        placeholder6487: {},
        Vector: {},
        chevron: {},
        title: {},
        Dropdownlist: {},
      },
      variantValues: { property1: "dropdown lista item 2 selected" },
    },
    {
      overrides: {
        "Rectangle 46478": {},
        "some text6479": {},
        "item 3": { display: "block" },
        "Rectangle 46481": {},
        "some text6482": {},
        "item 2": { display: "block" },
        "Rectangle 2": { backgroundColor: "rgba(186,173,138,1)" },
        "some text6485": {},
        "item 1": { display: "block" },
        "placeholder container": {},
        placeholder6489: {},
        placeholder6487: {},
        Vector: {},
        chevron: {},
        title: {},
        Dropdownlist: {},
      },
      variantValues: { property1: "dropdown item 1 selected" },
    },
    {
      overrides: {
        "Rectangle 46478": {},
        "some text6479": {},
        "item 3": {},
        "Rectangle 46481": {},
        "some text6482": {},
        "item 2": {},
        "Rectangle 2": {},
        "some text6485": {},
        "item 1": {},
        "placeholder container": {},
        placeholder6489: {},
        placeholder6487: {},
        Vector: {},
        chevron: {},
        title: {},
        Dropdownlist: {},
      },
      variantValues: { property1: "dropdown closed" },
    },
    {
      overrides: {
        "Rectangle 46478": {},
        "some text6479": {},
        "item 3": { display: "block" },
        "Rectangle 46481": {},
        "some text6482": {},
        "item 2": { display: "block" },
        "Rectangle 2": {},
        "some text6485": {},
        "item 1": { display: "block" },
        "placeholder container": {},
        placeholder6489: {},
        placeholder6487: {},
        Vector: {
          width: "86px",
          height: "52px",
          viewBox: { minX: 0, minY: 0, width: 86, height: 52 },
          paths: [
            {
              d: "M10.105 52L0 46.5324L43 23.2662L86 46.5324L75.895 52L43 34.2401L10.105 52ZM10.105 28.7338L0 23.2662L43 0L86 23.2662L75.895 28.7338L43 10.9739L10.105 28.7338Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ],
          top: "18.07%",
          bottom: "19.28%",
          left: "19.72%",
          right: "19.72%",
        },
        chevron: {},
        title: {},
        Dropdownlist: {},
      },
      variantValues: { property1: "dropdown opened" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="508px"
      height="340px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Dropdownlist")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="508px"
        height="85px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="255px"
        left="0px"
        {...getOverrideProps(overrides, "item 3")}
      >
        <View
          width="508px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 46478")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="43.88399887084961px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="298px"
          height="54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="15px"
          left="42px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="some text&#xA;"
          {...getOverrideProps(overrides, "some text6479")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="508px"
        height="85px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="170px"
        left="0px"
        {...getOverrideProps(overrides, "item 2")}
      >
        <View
          width="508px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 46481")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="43.88399887084961px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="298px"
          height="54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16px"
          left="42px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="some text&#xA;"
          {...getOverrideProps(overrides, "some text6482")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="508px"
        height="89px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="85px"
        left="0px"
        {...getOverrideProps(overrides, "item 1")}
      >
        <View
          width="508px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></View>
        <Text
          fontFamily="Montserrat"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="43.88399887084961px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="298px"
          height="54px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="42px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="some text&#xA;"
          {...getOverrideProps(overrides, "some text6485")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="508px"
        height="85px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "title")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="508px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "placeholder6487")}
        >
          <View
            width="508px"
            height="85px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(217,217,217,1)"
            {...getOverrideProps(overrides, "placeholder container")}
          ></View>
          <Text
            fontFamily="Montserrat"
            fontSize="36px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="43.88399887084961px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="162px"
            height="42px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="22px"
            left="75px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="list&#xA;"
            {...getOverrideProps(overrides, "placeholder6489")}
          ></Text>
        </View>
        <View
          width="142px"
          height="83px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="1px"
          left="366px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "chevron")}
        >
          <Icon
            width="71px"
            height="46.38px"
            viewBox={{ minX: 0, minY: 0, width: 71, height: 46.37646484375 }}
            paths={[
              {
                d: "M62.6575 0L71 4.87625L35.5 25.6263L0 4.87625L8.3425 0L35.5 15.8392L62.6575 0ZM62.6575 20.75L71 25.6263L35.5 46.3763L0 25.6263L8.3425 20.75L35.5 36.5892L62.6575 20.75Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="23.29%"
            bottom="20.83%"
            left="25%"
            right="25%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </View>
    </View>
  );
}
