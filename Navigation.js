
import React from 'react';
import {Car, Eclips} from './Assest/svgs/index';
import {StyleSheet, View} from 'react-native';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.icon}>
          <Eclips />
        </View>
        <View>
          <Car />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  innerContainer: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
  icon: {marginRight: -150, marginTop: -55},
});
export default Navigation;
