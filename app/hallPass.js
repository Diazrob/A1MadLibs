import { StyleSheet, Text, Image, View } from "react-native";
import { Link } from "expo-router";

export default function page2() {
  return  (
    <View style={styles2.container}>
      <View style={styles2.nav}>
        <Text>"Back"</Text>
      </View>
      {/* body View */}
        <View style={styles2.body}>
        {/* left View */}
        <View style={styles2.leftView}>
          <Image style={{width: 150, height:150}} source={require('../assets/luffy.png')} />
            <Text style={styles2.leftText}>Hall Pass</Text>
        </View>
          
        {/* right View */}
        <View style={styles2.rightView}>
             <Image style={{width: 150, height:150}} source={require('../assets/madLibs.png')}  />
          <View>
            <Text style={styles2.rightText}>Date:</Text>
            <Text style={styles2.rightText}>
              NAME is too cool for NOUN class. Instead, she/he will be attending the EVENT.
            </Text>
            <View style={styles2.signBox}>
              <Text style={styles2.signText}>Signed:</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles2 = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  padding: 0,
},
nav: {
  height: 60,
  width: "100%",
  backgroundColor:"lightblue",
  justifyContent: "center",
},
body: {
  flex: 1,
  flexDirection: "row",
  flexWrap: 'wrap',
  alignItems:'flex-start',
  padding: 10,
},
leftView: {
  flex:1,
  alignItems: "center",
  height:"100%",
  maxWidth: "35%",
},

leftText: {
  transform: [{rotate:'-90deg'}],
  fontSize: 70,
  width: 500,
  height: 200,
  letterSpacing: 10,
  fontWeight: "bold",
  paddingTop: 57,
  marginTop: 120,
  textTransform: "uppercase"
},
rightView: {
  flex:1,
  width: "65%",
  height: "100%",
  alignItems:"center",
},
rightImageView: {
  flex:1,
  alignItems: "center",
  borderWidth:2,
},
rightText: {
  fontSize:25,
  paddingBottom:30,
},
signBox: {
  borderWidth: 2,
  height: 100,
},
signText: {
  fontSize:27,
}

});