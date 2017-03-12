import {StyleSheet} from 'react-native';
import {Font} from 'expo';


export default Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
  	height: 40,
  	justifyContent: 'flex-end',
  }, 
  listItem: {
  	flexDirection: 'row',
  	padding: 5,
  	alignItems: 'center'
  },
  listText: {
    
  	paddingLeft: 5,
  }
});