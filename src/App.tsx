import { Header, Panel, TodoList } from './components';
import { Box } from '@mui/material'


export const App: React.FC = () => {

  return (
    <div className='App'>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width='400px'
      >
        <Header />
        <Panel />
        <TodoList  />
      </Box>
    </div>
  )
}
