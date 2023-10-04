import React from 'react';
import {

  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Router from "./route";

import {ThemeProvider} from "./src/contexts/ThemeContext";



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    <ThemeProvider>
    <View style={styles.sectionContainer}>
      <Router/>
    </View>
      </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
 flex: 1,
  },

});

export default App;
