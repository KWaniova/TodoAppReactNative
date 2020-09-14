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
} from 'react-native';

interface todoItem {
    text: string,
    key: string
  }
interface TodoProps {
  todos: todoItem[];
    handleSubmit: (text: string) => void;
}
const InputForm: React.SFC<TodoProps> = ({todos, handleSubmit}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmitButton = () => {
      handleSubmit(newTodo)
        setNewTodo('');
  }

  const changeHandler = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setNewTodo(event.nativeEvent.text);
  };

  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChange={changeHandler}
        value={newTodo}
      />
      <Button color={'orange'} onPress={handleSubmitButton} title="add todo" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#000',
    fontSize: 18,
    marginBottom: 20,
    borderBottomColor: '#787878',
    borderBottomWidth: 1
},
  viewStyle: {
      marginBottom:20
  }
});

export default InputForm;
