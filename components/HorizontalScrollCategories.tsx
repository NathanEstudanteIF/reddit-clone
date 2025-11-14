import { IconProps } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import {
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import CategoryIcon from "./CategoryIcon";

const { width } = Dimensions.get("window");

export type CategoryData = {
  icon: React.ComponentType<IconProps>;
  label: string;
  color: string;
};

type Props = {
  categories: CategoryData[];
};

export default function HorizontalScrollCategories({ categories }: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const [position, setPosition] = useState(0);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;

    const contentWidth = e.nativeEvent.contentSize.width - width;

    const progress = contentWidth > 0 ? x / contentWidth : 0;
    setPosition(progress);
  };

  return (
    <View style={styles.wrapper}>
        <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
            >
            {categories.map((cat, index) => (
                <CategoryIcon
                key={index}
                icon={cat.icon}
                label={cat.label}
                color={cat.color}
                />
        ))}
        </ScrollView>

        <View style={styles.indicatorBackground}>
            <View
                style={[
                styles.indicator,
                { transform: [{ translateX: position * 18 }] },
                ]}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 16,
    gap: 20,
  },
  indicatorBackground: {
    height: 4,
    width: 30,
    backgroundColor: "#e5e5e5",
    borderRadius: 2,
    overflow: "hidden",
    marginTop: 10,
    alignSelf: "center",
  },
  indicator: {
    width: 12,
    height: 4,
    backgroundColor: "#ee4c2d",
    borderRadius: 2,
  },
});
