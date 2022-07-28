import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type InputComponentsPropsType = {
    type: string
    initialValue: number
    label: string
    callBack: (value: number) => void
    validationNumber: number
}

const InputComponent: React.FC<InputComponentsPropsType> = ( {type, initialValue, callBack, label,
                                                                 validationNumber} ) => {

    let [value, setValue] = useState<number>(initialValue);
    let [error, setError] = useState<boolean>(false);


    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let currentNumber = parseInt(event.currentTarget.value);
        if(currentNumber < validationNumber) {
            setValue(currentNumber);
            setError(true);
        } else {
            setValue(currentNumber);
            setError(false);
        }
    }

    const onBlueHandler = () => {
        isNaN(value) ? setError(true) : callBack(value)
    }

    return (
        <>
            <TextField id="outlined-basic" label={label} variant="outlined"
                       type={type} value={value} onChange={onChangeHandler}
                       onBlur={onBlueHandler} size={"small"}
                       error={error} helperText={"Invalid input provided"}
            />
        </>
    );
}

export default InputComponent;