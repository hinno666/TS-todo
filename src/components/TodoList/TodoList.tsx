import { ITodo } from "../../types/data"
import { TodoItem } from "../TodoItem/TodoItem"
import { Box } from '@mui/material'

interface ITodoListProps {
    todoList: ITodo[];
}

export const TodoList: React.FC<ITodoListProps> = ({ todoList }) => {
    return (
        <Box>
            {todoList.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })}
        </Box>
    )
}
