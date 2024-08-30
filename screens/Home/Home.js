import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import style from './style';
import globalStyle from '../../assets/styles/GlobalStyle';

const Home = () => {
  return (
   <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
     <View >
     <Text style={style.text}>홈</Text>
     </View>
   </SafeAreaView>
  );
};

export default Home;


