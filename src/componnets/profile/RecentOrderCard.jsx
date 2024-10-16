/* eslint-disable no-unused-vars */
import React from 'react';
import { orders } from '../../data/order';

const RecentOrderCard = () => {
  return (
    <div className="orders-container">
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-card__image">
            <img src={order.image} alt={order.name} />
          </div>
          <div className="order-card__details">
            <h3 className="order-card__name">{order.name}</h3>
            <p className="order-card__description">{order.description}</p>
            <p className="order-card__model">
              {order.modelNo} <span>{order.dateTime}</span>
            </p>

            <div className="order-card__payment">
              <span>Payment:</span>
              <strong>{order.payment}</strong>
            </div>
            <div className="order-card__other-details">
              <span>{order.orderId}</span>
              <span>{order.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrderCard;
