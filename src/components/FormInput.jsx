import  React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, gray 30%, black 90%)',
        border: 0,
        color: '#fff',
        height: '100%',
        padding: '20px',
        whiteSpace: 'nowrap',
        boxShadow:' 0 0 10px 6px #ffffff60',
    },
    label: {
        width: '80%',
        background: '#fff',
        borderradius:'5px',
        
    }
});


const TodoCreator = ({ theme, todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl   className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="What's need to be done?" // better accessibility with Material UI
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                        onKeyPress={preventSubmit}
                    />

                    { !isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text">Task can't be empty</FormHelperText>
                        </>
                    }
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    onKeyPress={preventSubmit}
                >
                    Add task
                </Button>
            </ThemeProvider>
        </div>
    )

}

export  default TodoCreator;