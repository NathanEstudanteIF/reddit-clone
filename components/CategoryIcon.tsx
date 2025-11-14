import { IconProps } from "phosphor-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CategoryItemProps = {
  icon: React.ComponentType<IconProps>;
  label: string;
  color: string;
  onPress?: () => void;
};

export default function CategoryIcon({ icon: Icon, label, color, onPress }: CategoryItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Icon size={32} color={color} weight="regular" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 70,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    textAlign: "center",
    color: "#333",
    lineHeight: 14,
  },
});
