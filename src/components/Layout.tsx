import { View, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 