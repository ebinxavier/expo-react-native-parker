import React from 'react';
import { Text, View,Button } from 'react-native';
import styles from '../css/style';


export class AboutScreen extends React.Component{
    static navigationOptions = ({navigation})=>{
     return  {
      title: 'About '+navigation.getParam("count",1),
      headerStyle: { 
        backgroundColor: '#3d3', 
        // textColor:"white"
      }, 
    }
  }; 
  
    render(){
      const count = this.props.navigation.getParam("count",1);
      // const count=1;
      return(
        <View style={styles.container}>
          <Text style={styles.margin}>About Route : {count}</Text>   
          <View style={styles.margin}> 
            <Button title="about" onPress={()=>{
              this.props.navigation.push('About',{count:count+1});
            }}/> 
          </View>
          <View style={styles.margin}>
            <Button title="back" onPress={()=>{
              this.props.navigation.goBack();
            }}/> 
           </View>
           <View style={styles.margin}>
            <Button title="Home" onPress={()=>{
              this.props.navigation.navigate('Home');
            }}/> 
           </View>
        </View>
      );
    }
  }