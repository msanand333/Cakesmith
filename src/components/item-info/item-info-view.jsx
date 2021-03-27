import React from 'react'
import CartItemInfo from './cart-itemInfo';
import EditItemInfo from './edit-itemInfo';
import AvailableItemInfo from './available-itemInfo';
import PlacedOrderItemInfo from './placedOrder-itemInfoView';
import ReceivedOrderItemInfo from './receivedOrder-itemInfo';
const ItemInfoView = (props) => {
    if (props.type === "cart") {
        return (
            <CartItemInfo />
        )
    }
    else if (props.type === "edit") {
        return (
            <EditItemInfo />
        )
    }
    else if (props.type === "available") {
        return (
            <AvailableItemInfo />
        )
    }
    else if (props.type === "placed-order") {
        return (
            <PlacedOrderItemInfo />
        )
    }
    else if (props.type === "received-order") {
        return (
            <ReceivedOrderItemInfo />
        )
    }

}

export default ItemInfoView
