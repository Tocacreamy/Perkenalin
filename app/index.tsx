import { Link } from "expo-router";
import React from "react";
import { Text, View,StyleSheet, Button } from "react-native";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";


export default function Index() {
  return (
    <>
    
    <View style={styles.upView}>
      <Text style={styles.Hello}>hello guys 👋, I am</Text>
      <Text style={styles.bigName}>Zeko Baharudin Firdaus</Text>
      <Text style={styles.Hello}>Student at <Text style={styles.HelloBlue}>Ahmad Dahlan University </Text></Text>
    </View>
    <View>
      <Text style={styles.text}>I am a passionate designer and illustrator with a strong focus on front-end development using React. My enthusiasm for UI/UX inspires me to create engaging and user-friendly experiences that not only captivate users but also solve real problems. I firmly believe in the power of a growth mindset, embracing challenges as opportunities to learn and grow.</Text>
      <Text style={styles.text}>Creativity fuels my work, allowing me to approach projects from fresh perspectives and develop innovative solutions. I am always open-minded and eager to learn, continuously seeking out new knowledge and skills that can enhance my craft. This drive for self-improvement and exploration keeps me motivated as I navigate the dynamic landscape of design and technology.</Text>
      <Text style={styles.text}>I thrive on collaboration and believe that sharing ideas and experiences leads to the best outcomes. I look forward to connecting with fellow creatives and professionals who share a similar passion for making a positive impact through design and technology</Text>
    </View>
    <View style={{flex:1,alignItems:"center",margin:50}}>
      <Link href={"/details"}style={styles.links}>Details</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  upView:{
    marginLeft:20,
    marginTop:50,
    marginBottom:40
  },
  Hello:{
    color:"slategray",
    fontSize:15
  },
  bigName:{
    fontSize:30,
    fontWeight:"bold",
    color:"tomato",

  },
  HelloBlue:{
    color:"slategray",
    fontSize:15,
    fontWeight:"800"
  },
  text:{
    fontSize:13,
    marginHorizontal:20,
    marginTop:10,
    textAlign:"justify",
    color:"gray"
  },
  links:{
    backgroundColor:"tomato",
    padding:10,
    borderRadius:7,
    color:"white"
  }

});