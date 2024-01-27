import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { AntDesign } from '@expo/vector-icons';

export default function page2() {
  const params = useLocalSearchParams();
  const cDate = new Date();
  const formatDate = cDate.toLocaleDateString();

  return  (
    <View style={styles2.container}>
      <View style={styles2.nav}>
        <Pressable style={styles2.backButton}>
           <Link
           href={"/"}
           >
            <AntDesign name="arrowleft" size={36} color="black" />
           </Link>
        </Pressable>
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
            <Text style={styles2.rightText}>Date: {formatDate}</Text>
            <Text style={styles2.rightText}>
              {params.name} is too cool for {params.noun} class. Instead, she/he will be attending the {params.event}.
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
backButton: {
  paddingLeft: 20,
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