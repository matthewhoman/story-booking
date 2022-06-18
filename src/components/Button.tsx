import React from 'react';

import css from  '../style/Button.module.scss';

export interface ButtonProps {
    background: string;
    color: string;
    value: string;
    width: string;
    height: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
    const { color, width, height, background, value = "Button", handleClick } = props;
    const style = {
        color: color,
        width: width,
        height: height,
        background: background
    };

    return (
        <button 
            className={css.neutral} 
            style={style}
            onClick={handleClick}>
            {value}
        </button>
    );
};

export default Button;