import { ITodo } from "../../types/data"
import { IconButton, Checkbox, Paper, Box, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

interface ITodoItem extends ITodo {
    deleteTodo: (id: ITodo['id']) => void;
    completeTodo: (id: ITodo['id']) => void;
}

export const TodoItem: React.FC<ITodoItem> = ({ id, title, complete, deleteTodo, completeTodo }) => {

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
                <Checkbox checked={complete} onChange={() => completeTodo(id)} />
                <IconButton
                    aria-label="delete"
                >
                    <CreateIcon />
                </IconButton>
                <IconButton
                    color="error"
                    aria-label="delete"
                    onClick={() => deleteTodo(id)}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Paper >
    )
}
