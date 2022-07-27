import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type InputComponentsPropsType = {
    type: string
    initialValue: number
    label: string
    callBack: (value: number) => void

}

const InputComponent: React.FC<InputComponentsPropsType> = ( {type, initialValue, callBack, label } ) => {

    let [value, setValue] = useState<number>(initialValue);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.currentTarget.value));
    }

    const onBlueHandler = () => {
        isNaN(value) ? console.log("isNanProvided") : callBack(value)
    }

    return (
        <>
            <TextField id="outlined-basic" label={label} variant="outlined"
                       type={type} value={value} onChange={onChangeHandler}
                       onBlur={onBlueHandler} size={"small"}/>
        </>
    );
}

export default InputComponent;