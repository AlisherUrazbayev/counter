import React, {useState} from 'react';
import './App.css';
import CounterPage from "./components/counterPage/CounterPage";
import CounterSettings from "./components/CounterSettings/CounterSettings";
import {Grid} from "@mui/material";

export type SettingsType = {
    maxValue: number
    startValue: number
}

function App() {

    let [settings, setSettings] = useState<SettingsType>({
        maxValue: 4,
        startValue: 1,
    })

    const updateSettings = (newSettings: SettingsType) => {
        setSettings(newSettings);
    }

    return (
        <div className="App">
            <Grid container spacing={12} justifyContent={"center"} alignItems="center">
                <Grid item>
                    <CounterSettings settings={settings} updateSettings={updateSettings}/>
                </Grid>
                <Grid item>
                    <CounterPage number={settings.startValue} maxValue={settings.maxValue} />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
