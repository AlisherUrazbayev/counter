import React, {useState} from 'react';
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
                />
            </div>
            <div style={{margin: '20px'}}>
                <span>Start value:</span>
                <InputComponent type={"number"}
                                initialValue={localSettings.startValue}
                                callBack={setStartValue}
                                label={"Starting value"}
                />
            </div>
            <div>
                <ButtonComponent name={"Set"} callBack={onClickUpdateSettings} />
            </div>
        </Paper>
    );
};

export default CounterSettings;