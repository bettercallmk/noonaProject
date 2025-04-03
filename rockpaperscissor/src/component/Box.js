import React from 'react';

const Box = (props) => {
    // 결과에 따라 클래스명 반환
    const getResultClass = () => {
        if (props.result === 'win') return 'win';
        if (props.result === 'lose') return 'lose';
        if (props.result === 'tie') return 'tie';
        return '';
    };

    return (
        <div className={`box ${getResultClass()}`}>
            <h1>{props.title}</h1>
            {props.item && (
                <>
                    <img className="item-img" src={props.item.img} alt={props.item.name} />
                    <h2>{props.result.toUpperCase()}</h2>
                </>
            )}
        </div>
    );
};

export default Box;