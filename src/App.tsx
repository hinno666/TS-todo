import { useState } from "react";
import { ITodo } from './types/data'
import { Header, Panel, TodoList } from './components';
import { Box } from '@mui/material'


export const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = () => {
    if (value === '') return;

    setTodos([...todos, {
      id: Date.now(),
      title: value,
      complete: false,
    }])

    setValue('');
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id))
  }

  const completeTodo = (id: ITodo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      })
    )
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value)
  }

  return (
    <div className='App'>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width='400px'
      >
        <Header />
        <Panel addTodo={addTodo} onChange={onChange} value={value} />
        <TodoList todoList={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      </Box>
    </div>
  )
}
