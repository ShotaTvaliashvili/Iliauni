import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import TodoItem from './TodoItem';
import { TodoTaskType } from './Data/TodoData';


interface ITodoList {
    todos: TodoTaskType[];
    onDoubleTap: (task: TodoTaskType) => void;
}

const  TodoList: React.FC<ITodoList> = ({ todos, onDoubleTap }) => {
    

    const renderListItem: ListRenderItem<any> = ({item}) => {
        return (
            <TodoItem item={item} onDoubleTap={() => onDoubleTap(item)} />
        )
    }


    return (
        <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={renderListItem}
        />
    );
}


export default TodoList;
