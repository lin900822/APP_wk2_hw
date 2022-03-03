import React from "./node_modules/react";
import {  StyleSheet, Text, View, Image, StatusBar, SafeAreaView} from 'react-native';
import Header from "./Components/Header";
import AlbumList from "./Components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
