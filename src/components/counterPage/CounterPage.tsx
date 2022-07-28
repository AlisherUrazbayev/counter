import React, {useEffect, useState} from 'react';
import ButtonComponent from "../reusableComponents/ButtonComponent";
import {Paper} from "@mui/material";

type CounterPagePropsType = {
    number: number
    maxValue: number

}

const CounterPage: React.FC<CounterPagePropsType> = (props) => {

    let [number, setNumber] = useState<number>(props.number);
    let [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        let stringValue = localStorage.getItem("counterValue");
        if(stringValue) setNumber(JSON.parse(stringValue));
    },[]);

    useEffect(() => {
        setNumber(props.number);
    }, [props.number]);

    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(number));
        number === props.maxValue && setDisabled(true);
    }, [number]);

    const onIncrementHandler = () => {
        number !== props.maxValue && setNumber(number + 1);
    }

    const onResetHandler = () => {
        setNumber(props.number);
        setDisabled(false);
    }

    const numberStyle = number === props.maxValue ? {color: "#ff0000"} : {}

    return (
        <Paper style={{ minWidth: '200px', minHeight: '200px', display: "flex",
            flexDirection: 'column', justifyContent: 'space-evenly'}}>
            <div style={numberStyle}>{number}</div>
            <div>
                <ButtonComponent disabled={disabled} name="Inc" callBack={onIncrementHandler}/>
                <ButtonComponent  name="Reset" callBack={onResetHandler}/>
            </div>
        </Paper>
    );
};

export default CounterPage;