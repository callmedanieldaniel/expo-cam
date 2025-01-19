import { View, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

export function TopSettings() {
  return (
    <View style={styles.header}>
      <Pressable>
        <AntDesign name="setting" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
}); 