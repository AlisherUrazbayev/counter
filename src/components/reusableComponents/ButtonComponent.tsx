import React from 'react';

type ButtonComponentPropsType = {
    name: string
    callBack: () => void
}

const ButtonComponent: React.FC<ButtonComponentPropsType> = ( {name, callBack} ) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div>
            <button onClick={onClickHandler}>{name}</button>
        </div>
    );
}

export default ButtonComponent;