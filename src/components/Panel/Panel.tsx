import { Add } from '@mui/icons-material'
import { TextField, Paper, Button } from '@mui/material'
import { useAppDispatch } from '../../hook';
import { addTodo } from '../../store/todoSlice';
import { useState } from 'react';


export const Panel: React.FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useAppDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value)
        console.log(value);
    }

    const handleAction = () => {
        if (value.trim().length) {
            dispatch(addTodo(value));
            setValue('')
        }
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(handleAction)
        }
    }


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
                onKeyDown={onKeyDown}
                onChange={onChange}
                autoFocus={true}
                sx={{
                    width: '300px'
                }}
            />
            <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={handleAction}
            >ADD</Button>
        </Paper>
    )
}
