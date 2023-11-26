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
        <TodoList todoList={todos} />
      </Box>
    </div>
  )
}
