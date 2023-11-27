import { ITodo } from "../../types/data"
import { IconButton, Checkbox, Paper, Box, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useAppDispatch } from "../../hook";
import { completeTodo, removeTodo } from "../../store/todoSlice";

interface ITodoItem extends ITodo {

}

export const TodoItem: React.FC<ITodoItem> = ({ id, title, complete }) => {

    const dispatch = useAppDispatch()

    return (
        <Paper
            elevation={2}
            sx={{
                marginTop: '15px',
                width: '100%',
                padding: '25px 20px',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2
            }}
        >
            <Box textAlign='left'>
                <Typography
                    sx={{
                        fontSize: 35,
                        ...(complete && {
                            textDecoration: 'line-through',
                        })
                    }}
                    variant="h5"
                    component='h5'
                    gutterBottom

                >
                    {title}
                </Typography>
            </Box>
            <Box>
                <Checkbox checked={complete} onChange={() => dispatch(completeTodo(id))} />
                <IconButton
                    aria-label="delete"
                >
                    <CreateIcon />
                </IconButton>
                <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => dispatch(removeTodo(id))}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Paper >
    )
}
