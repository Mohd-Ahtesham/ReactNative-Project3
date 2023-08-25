import React from 'react';
import ColorsFormat from './colorFormat';
import Navigation from './Navigation';
import SignUp from './signUp';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Footer from './Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navigation />
        <SignUp />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsFormat.whiteSmoke,
  },
});

export default App;
