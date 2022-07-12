import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterPage from "./components/counterPage/CounterPage";
import CounterSettings from "./components/CounterSettings/CounterSettings";

export type SettingsType = {
    maxValue: number
    startValue: number
}

function App() {

    let [settings, setSettings] = useState<SettingsType>({
        maxValue: 4,
        startValue: 1,
    })

    let [number, setNumber] = useState<number>(settings.startValue);

    useEffect(() => {
        console.log("A")
    })

    const updateSettings = (newSettings: SettingsType) => {
        setSettings(newSettings);
    }

    const increment = () => {
        setSettings({...settings});
    }


    return (
        <div className="App">

            <CounterSettings settings={settings} updateSettings={updateSettings}/>
        </div>
    );
}

export default App;
