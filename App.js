import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,FlatList,Modal,Alert } from 'react-native';
// import { useState } from 'react';
import useState from 'react-usestateref'
export default function App() {
  const [num, setnum] = useState(0);
  const [val, setval] = useState('');
  const [modaler, setmodaler] = useState(false);
  var [guess, setguess,refg] = useState(Math.floor(Math.random() * 100) + 1);
  const [guesslogs, setguesslogs] = useState([]);
  const [totalguess, settotalguess] = useState(0);
  var [lowerlimit, setlowerlimit,refl] = useState(0);
  var [upperlimit, setupperlimit,refu] = useState(101);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput numeric maxLength={2} style={styles.textarea} value={val} onChangeText={setval}/>
      <Button title="Submit" onPress={()=>{
        if(val.length===1){
          if(val[0]>='0' && val[0]<='9'){
            console.log('ok');
          }else{
            setval('');
          }
        }else{
        for(let i=0;i<val.length;i++){
           if(val[0]>='0' && val[0]<='9'){
            console.log('ok');
          }else{
            setval('');
          }
        }
        console.log(Number(val));
        setnum(Number(val));
        setmodaler(true);
        setval('');
        }
      }}/>
      <Modal visible={modaler} animation="slide">
          <Text>{guess}</Text>
          <Button title="+" onPress={()=>{
            console.log(guess,num);
            if(guess>num){
              return;
            }
            settotalguess(totalguess+1);
              let arr=[...guesslogs];
              arr.push(guess);
              setguesslogs(arr);
              setlowerlimit(guess);
            console.log(guess);
               console.log("lowerlimit",refl.current,"upperlimit",refu.current);

              let nn=Math.floor(Math.random() * 100) + 1;
              if(nn<refu.current && nn>refl.current){
                setguess(nn);
                  if(refg.current===num){
                Alert.alert('You Won!',`Total Guesses Taken:${totalguess}`);
              }}
            else{
                  while(1){
                    nn=Math.floor(Math.random() * 100) + 1;
                    if(nn<refu.current && nn>refl.current){
                      break;
                    }
                  }
                  setguess(nn);
              if(refg.current===num){
                Alert.alert('You Won!',`Total Guesses Taken:${totalguess}`);}
              }

          }}/>
          <Button title="-" onPress={()=>{
            if(guess<num){
              return;
            }
            settotalguess(totalguess+1);
              let arr=[...guesslogs];
              arr.push(guess);
              setguesslogs(arr);
              setupperlimit(guess);
              console.log("lowerlimit",refl.current,"upperlimit",refu.current);

              let nn=Math.floor(Math.random() * 100) + 1;
              if(nn<refu.current && nn>refl.current){
                setguess(nn);
                  if(refg.current===num){
                Alert.alert('You Won!',`Total Guesses Taken:${totalguess}`);
              }}
            else{
                  while(1){
                    nn=Math.floor(Math.random() * 100) + 1;
                    if(nn<refu.current && nn>refl.current){
                      break;
                    }
                  }
                  setguess(nn);
                  console.log("geu",guess);
              if(refg.current===num){
                Alert.alert('You Won!',`Total Guesses Taken:${totalguess}`);}
              }

          }}
          />
          <FlatList data={guesslogs} renderItem={(element)=>{
            return (
              <View>
                <Text>
                  {element.item};
                </Text>
              </View>
            )
          }}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textarea:{
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'black'
  }
});
