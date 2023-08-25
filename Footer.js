import React from 'react';
import ColorsFormat from './colorFormat';
import {Google, Fb, Twitter, WhiteCircle} from './Assest/svgs/index';
import {StyleSheet, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <View>
          <WhiteCircle />
        </View>
        <View style={styles.footerIcons}>
          <Fb />
        </View>
      </View>
      <View style={styles.icon}>
        <View>
          <WhiteCircle />
        </View>
        <View style={styles.footerIcons}>
          <Google />
        </View>
      </View>
      <View style={styles.icon}>
        <View>
          <WhiteCircle />
        </View>
        <View style={styles.footerIcons}>
          <Twitter />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  orText: {
    textAlign: 'center',
    color: ColorsFormat.white,
    fontWeight: 400,
    marginTop: 20,
  },
  footer: {
    backgroundColor: ColorsFormat.pink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {flexDirection: 'row', padding: 49},

  footerIcons: {marginLeft: -32, marginTop: 7},
});
export default Footer;
