import React, { useRef } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { TodoTaskType } from './Data/TodoData';

interface ITodoItem { 
    item: TodoTaskType, 
    onDoubleTap: (val: TodoTaskType) => void,
}

const  TodoItem: React.FC<ITodoItem> = ({ item, onDoubleTap })  => {
  const lastTap = useRef<number | null>(null);

  const handleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) {
      onDoubleTap(item);
    }
    lastTap.current = now;
  };

  return (
    <Pressable onPress={handleTap} style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    marginVertical: 6,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
  },
});
