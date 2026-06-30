import { icon } from "@/constants/icon";
import React, { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type TabBarButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: keyof typeof icon;
  color: string;
  label: string;
};

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  color,
  label,
}: TabBarButtonProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 300,
      dampingRatio: 0.8,
    });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scale.value, [0, 1], [1, 1.4]),
        },
      ],
      marginTop: interpolate(scale.value, [0, 1], [0, 15]),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scale.value, [0, 1], [1, 0]),
    };
  });

  const IconComponent = icon[routeName] || ((props: any) => null);

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabbarItem}>
      <Animated.View style={animatedIconStyle}>
        <View style={{ alignItems: 'center' }}>
          {IconComponent({ color, size: 24 })}
        </View>
      </Animated.View>
      <Animated.Text
        style={[
          { color, fontSize: 12, marginTop: 4 },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});