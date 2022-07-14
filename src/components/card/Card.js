import React from 'react';
import Icon from './../icons';
import './Card.scss';

const Card = React.forwardRef((props, ref) => {
    const { data, firstName, lastName } = props;
    return (
        <div className='card' ref={ref}>
            <div className="card-top">
                <div className="balance-info">
                    <h4>Balance</h4>
                    <h2 className='available-balance'>$ <span>{data.balance}</span></h2>
                </div>
                <div className="company">
                    <Icon name={data.company} />
                    <h4>{data.cardType}</h4>
                </div>
            </div>
            <div className="card-bottom">
                <div className="card-info">
                    <h4 className='owner-name'>{`${firstName} ${lastName}`}</h4>
                    <span className='card-number'>**** **** **** <span>{data.cardNumber}</span></span>
                </div>
                <span className='expiry-date'>{data.expiryDate.split(' ').join(' / ')}</span>
            </div>
        </div>
    )
})

export default Card;