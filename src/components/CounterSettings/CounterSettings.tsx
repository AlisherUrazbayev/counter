import React, {useState} from 'react';
import InputComponent from "../reusableComponents/InputComponent";
import {SettingsType} from "../../App";
import ButtonComponent from "../reusableComponents/ButtonComponent";
import {log} from "util";

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

    const pnIncrementHandler = () => {
        
    }

    return (
        <div>
            <div>
                <span>Max value: </span>
                <InputComponent type={"number"}
                                initialValue={localSettings.maxValue}
                                callBack={setMaxValue}
                />
            </div>
            <div>
                <span>Start value:</span>
                <InputComponent type={"number"}
                                initialValue={localSettings.startValue}
                                callBack={setStartValue}
                />
            </div>
            <div>
                <ButtonComponent name={"Set"} callBack={onClickUpdateSettings} />
            </div>
            <div>
                <div>{localSettings.startValue}</div>
                <div>
                    <ButtonComponent name={"Inc"} callBack={} />
                </div>
            </div>
        </div>
    );
};

export default CounterSettings;