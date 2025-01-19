import { StyleSheet, Text, GestureResponderEvent, PanResponderGestureState } from 'react-native';
import { PanResponder, Animated } from 'react-native';
import { useRef } from 'react';

export function Watermark() {
  const pan = useRef(new Animated.ValueXY()).current;
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => {
        pan.flattenOffset();
      },
      onPanResponderTerminate: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { translateX: pan.x },
            { translateY: pan.y }
          ]
        }
      ]}
      {...panResponder.panHandlers}
    >
      <Text style={styles.text}>水印文字</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    zIndex: 1000,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
}); 