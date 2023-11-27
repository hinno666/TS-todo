import { useAppSelector } from "../../hook"
import { TodoItem } from "../TodoItem/TodoItem"
import { Box } from '@mui/material'


export const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos);
 
    return (
        <Box>
            {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </Box>
    )
}
