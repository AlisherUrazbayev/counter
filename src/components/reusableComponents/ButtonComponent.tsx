import React from 'react';
import {Button} from "@mui/material";

type ButtonComponentPropsType = {
    name: string
    callBack: () => void
}

const ButtonComponent: React.FC<ButtonComponentPropsType> = ( {name, callBack} ) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
            <Button variant={"contained"} onClick={onClickHandler}
                    style={{marginLeft: '10px'}}>
                {name}
            </Button>
    );
}

export default ButtonComponent;