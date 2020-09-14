/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Button,
  TouchableOpacity,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './components/Header';
import InputForm from './components/InputForm';

const searchIcon = <Icon style={{marginLeft: 25}} name="search" size={25} />;

interface todoItem {
  text: string;
  key: string;
}



const App: () => React.ReactNode = () => {
  const [todos, setTodos] = useState([
    {text: 'buy milk', key: '1'},
    {text: 'play the piano', key: '2'},
    {text: 'read a book', key: '3'},
  ]);

  const handleSubmit = (text: string) => {
    if (text.length > 3)
      setTodos([{text: text, key: Math.random().toString()}, ...todos]);
    else ToastAndroid.showWithGravity('Too short', ToastAndroid.SHORT, 25);
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((item) => item.key != id));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <InputForm todos={todos} handleSubmit={handleSubmit} />
          {/* to form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TouchableOpacity onLongPress={() => handleDelete(item.key)}>
                 <View style={styles.item}>
                  <Icon style={styles.icon} name='delete' size={23}/>
                 <Text style={styles.text}>{item.text}</Text>
                 </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View> 
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    margin: 24,
    flex: 1,
    alignContent: 'center',
  },
  list: {
    alignContent: 'center',
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 40,
    borderStyle: 'dashed',
    borderWidth: 1,
    fontSize: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  icon: {
    flex: 1
  },
  text: {
    flex: 6
  }
});

export default App;
