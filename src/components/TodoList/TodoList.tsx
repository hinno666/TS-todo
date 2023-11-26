import { ITodo } from "../../types/data"
import { TodoItem } from "../TodoItem/TodoItem"
import { Box } from '@mui/material'

interface ITodoListProps {
    todoList: ITodo[];
    deleteTodo: (id: ITodo['id']) => void;
    completeTodo: (id: ITodo['id']) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({ todoList, deleteTodo, completeTodo }) => {
    return (
        <Box>
            {todoList.map((todo) => {
                return <TodoItem key={todo.id} {...todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            })}
        </Box>
    )
}
