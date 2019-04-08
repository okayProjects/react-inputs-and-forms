import React from 'react';

const Cash = (props) => {

    const money = (props.value / props.ratio * props.price).toFixed(2)
    return (
        <div>{props.title}: {props.value <= 0 ? '' : money}</div>
    )
}


export default Cash;