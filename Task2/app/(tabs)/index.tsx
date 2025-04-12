import { useState } from 'react';
import { Image, StyleSheet, } from 'react-native';

import { TodoListData, TodoTaskType } from '@/Tasks/Task2/Data/TodoData';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import TabSwitcher, { TabType } from '@/Tasks/Task2/TabSwitcher';
import TodoList from '@/Tasks/Task2/TodoList';

export default function HomeScreen() {

  const [tab, setTab] = useState<TabType>('CURRENT');
  const [currentTodos, setCurrentTodos] = useState<TodoTaskType[]>(TodoListData);
  const [completedTodos, setCompletedTodos] = useState<TodoTaskType[]>([]);


  const dataToRender = tab === 'CURRENT' ? currentTodos : completedTodos;

  const handleDoubleTap = (item: TodoTaskType) => {
    if (tab === 'CURRENT') {
      setCurrentTodos(currentTodos.filter(t => t.id !== item.id));
      setCompletedTodos([...completedTodos, item]);
    } else {
      setCompletedTodos(completedTodos.filter(t => t.id !== item.id));
      setCurrentTodos([...currentTodos, item]);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
        <TabSwitcher activeTab={tab} setTab={setTab}/>
        <TodoList todos={dataToRender} onDoubleTap={handleDoubleTap} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
