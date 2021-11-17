import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity , SafeAreaView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIntroSlider from 'react-native-app-intro-slider';
import success from '../assets/onboarding/Successfactors-rafiki.png';
const slides = [
  {
    key: 1,
    title: 'Easy to use mobile pos',
    text: 'Description.Say something cool',
    image: require('../assets/onboarding/Fillout.gif'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Easy to use mobile pos',
    text: 'Description.\nSay something cool',
    image: require('../assets/onboarding/Personalfiles.gif'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Easy to use mobile pos',
    text: "I'm already out of descriptions\nLorem ipsum bla bla bla",
    image: require('../assets/onboarding/Personalfiles.gif'),
    backgroundColor: '#22bcb5',
  },
];

const _renderNextButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Text style={{color: 'white'}}>Next</Text>
    </View>
  );
};
const _renderDoneButton = () => {
  return (
    <View style={styles.buttonCircle}>
      <Text style={{color: 'white'}}>Done</Text>
    </View>
  );
};

const _renderItem = ({item}) => {
  console.log(item);
  return (
    <View style={styles.slide}>
      <Image style={{width: 400, height: 400}} source={item?.image} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const Onboarding = () => {
  const [showRealApp, setshowRealApp] = useState(false);
  const _onDone = () => {
    setshowRealApp(true);
  };
  if (showRealApp) {
    return (
      <View style={styles.slide}>
        <Image style={{width: 400, height: 400}} source={success} />

        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.text}>{slides[0].text}</Text>
        <View style={{flex:1}}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'white'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <AppIntroSlider
        dotStyle={{width: 20, backgroundColor: 'gray'}}
        activeDotStyle={{width: 40, backgroundColor: '#5190FC'}}
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
      />
    );
  }
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  buttonCircle: {
    width: 60,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5190FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    height: 44,
    borderRadius: 10,
    borderColor: 'none',
    width:'80%',
    marginBottom:30
  },
});
export default Onboarding;
