import React, {useEffect, useState} from 'react';
import ButtonComponent from "../reusableComponents/ButtonComponent";
import {Paper} from "@mui/material";

type CounterPagePropsType = {
    number: number
    maxValue: number

}

const CounterPage: React.FC<CounterPagePropsType> = (props) => {

    let [number, setNumber] = useState<number>(props.number);

    useEffect(() => {
        let stringValue = localStorage.getItem("counterValue");
        if(stringValue) setNumber(JSON.parse(stringValue));
    },[]);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(number));
    }, [number]);

    const onIncrementHandler = () => {
        number !== props.maxValue && setNumber(number + 1);
    }

    const onResetHandler = () => {
        setNumber(props.number);
    }

    return (
        <Paper style={{ minWidth: '200px', minHeight: '200px', display: "flex",
            flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <div>{number}</div>
            <div>
                <ButtonComponent name="Inc" callBack={onIncrementHandler}/>
                <ButtonComponent name="Reset" callBack={onResetHandler}/>
            </div>
        </Paper>
    );
};

export default CounterPage;