import React, {ChangeEvent, useState} from 'react';
import {log} from "util";

type InputComponentsPropsType = {
    type: string
    initialValue: number
    callBack: (value: number) => void

}

const InputComponent: React.FC<InputComponentsPropsType> = ( {type, initialValue, callBack } ) => {

    let [value, setValue] = useState<number>(initialValue);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(event.currentTarget.value));
    }

    const onBlueHandler = () => {
        isNaN(value) ? console.log("isNanProvided") : callBack(value)
    }

    return (
        <>
            <input type={type} value={value} onChange={onChangeHandler}
                   onBlur={onBlueHandler}
            />
        </>
    );
}

export default InputComponent;