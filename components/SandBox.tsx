import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

 
const SandBox: React.SFC = () => {
    return (  
        <View style={styles.container}>
        

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#555',
        flex: 1
    }
});
 
export default SandBox;