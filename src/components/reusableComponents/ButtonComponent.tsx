import React from 'react';
import {Button} from "@mui/material";

type ButtonComponentPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

const ButtonComponent: React.FC<ButtonComponentPropsType> = ( {name, callBack, disabled} ) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
            <Button disabled={disabled} variant={"contained"} onClick={onClickHandler}
                    style={{marginLeft: '10px'}}>
                {name}
            </Button>
    );
}

export default ButtonComponent;