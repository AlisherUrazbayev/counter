import React, {useEffect, useState} from 'react';
import InputComponent from "../reusableComponents/InputComponent";
import {SettingsType} from "../../App";
import ButtonComponent from "../reusableComponents/ButtonComponent";
import {Paper} from "@mui/material";

type CounterSettingsPropsType = {
    settings: SettingsType
    updateSettings: (newSettings: SettingsType) => void
}

const CounterSettings: React.FC<CounterSettingsPropsType> = ( { settings, updateSettings} ) => {

    let [localSettings, setLocalSettings] = useState<SettingsType>(settings);
    let [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if(localSettings.maxValue <= 0 ||  localSettings.startValue < 1 || localSettings.maxValue <= localSettings.startValue) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [localSettings.maxValue, localSettings.startValue])

    const setMaxValue = (maxValue: number) => {
        setLocalSettings({...localSettings, maxValue: maxValue});
    }

    const setStartValue = (startValue: number) => {
        setLocalSettings({...localSettings, startValue: startValue});
    }

    const onClickUpdateSettings = () => {
        updateSettings(localSettings);
    }

    return (
        <Paper style={{minWidth: '200px', minHeight: '200px'}}>
            <div style={{margin: '20px'}}>
                <span>Max value: </span>
                <InputComponent type={"number"}
                                initialValue={localSettings.maxValue}
                                callBack={setMaxValue}
                                label={"Max value"}
                                validationNumber={1}
                />
            </div>
            <div style={{margin: '20px'}}>
                <span>Start value:</span>
                <InputComponent type={"number"}
                                initialValue={localSettings.startValue}
                                callBack={setStartValue}
                                label={"Starting value"}
                                validationNumber={0}
                />
            </div>
            <div>
                <ButtonComponent disabled={disabled} name={"Set"} callBack={onClickUpdateSettings} />
            </div>
        </Paper>
    );
};

export default CounterSettings;