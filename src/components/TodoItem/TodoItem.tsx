import { ITodo } from "../../types/data"
import { IconButton, Checkbox, Paper, Box, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

interface ITodoItem extends ITodo {

}

export const TodoItem: React.FC<ITodoItem> = ({ id, title, complete }) => {
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
                    sx={{ fontSize: 35 }}
                    variant="h5"
                    component='h5'
                    gutterBottom
                >
                    {title}
                </Typography>
            </Box>
            <Box>
                <IconButton color="error" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>
            {/* <Checkbox checked={complete} />
             */}
        </Paper>
    )
}
