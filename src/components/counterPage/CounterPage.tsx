import React, {useEffect, useState} from 'react';
import {SettingsType} from "../../App";
import {log} from "util";
import ButtonComponent from "../reusableComponents/ButtonComponent";

type CounterPagePropsType = {
    number: number
    maxValue: number

}

const CounterPage: React.FC<CounterPagePropsType> = (props) => {

    let [number, setNumber] = useState<number>(props.number)

    const onIncrementHandler = () => {
        number !== props.maxValue && setNumber(number + 1);
    }

    const onResetHandler = () => {
        setNumber(props.number);
    }

    return (
        <div>
            <div>{number}</div>
            <div><ButtonComponent name="Inc" callBack={onIncrementHandler}  /></div>
            <div><ButtonComponent name="Reset" callBack={onResetHandler}  /></div>
        </div>
    );
};

export default CounterPage;