import React from 'react';
import {
    StyleSheet,
    Text
  } from 'react-native';

 
const Header: React.SFC = () => {
    return ( 
        <Text style={styles.header}>My Todos</Text>
     );
}
 
const styles = StyleSheet.create({
    header: {
        alignContent: 'center',
        backgroundColor: '#787878',
        fontWeight: 'bold',
        flexDirection: 'row',
         height: 100,
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize:20,
        color: 'white',
        padding: 20
      },
});

export default Header;