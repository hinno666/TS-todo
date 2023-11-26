import { Add } from '@mui/icons-material'
import { TextField, Paper, Button } from '@mui/material'

interface Props {
    value: string;
    addTodo: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Panel: React.FC<Props> = ({ addTodo, value, onChange }) => {

    return (
        <Paper
            elevation={2}
            sx={{
                width: '100%',
                padding: '25px 20px',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                gap: '15px'
            }}>
            <TextField
                id="outlined-basic"
                label="todo"
                variant="outlined"
                type="text"
                value={value}
                onChange={onChange}
                inputRef={input => input && input.focus()}
                sx={{
                    width: '300px'
                }}
            />
            <Button variant="outlined" onClick={addTodo} startIcon={<Add />}>ADD</Button>
        </Paper>
    )
}
