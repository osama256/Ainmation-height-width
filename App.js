import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'
const App: () => React$Node = () => {

  const animation = useSharedValue({width:200,height:200})

  const animationStyle = useAnimatedStyle(() => {
    return{
      width: withTiming(animation.value.width,{
        duration:1000
      }),
      height: withTiming(animation.value.height,{
        duration:600
      })
    }
  })
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        animation.value = {width:300,height:450}
      }}>
        <Animated.View style={[styles.box,animationStyle]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    // width: 200,
    // height: 200,
    backgroundColor: '#631d94'
  }
});

export default App;