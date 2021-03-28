import React from 'react'
import CartItemInfo from './cart-itemInfo';
import EditItemInfo from './edit-itemInfo';
import AvailableItemInfo from './available-itemInfo';
import PlacedOrderItemInfo from './placedOrder-itemInfoView';
import ReceivedOrderItemInfo from './receivedOrder-itemInfo';
const ItemInfoView = (props) => {
    if (props.type === "cart") {
        return (
            <CartItemInfo {...props}/>
        )
    }
    else if (props.type === "edit") {
        return (
            <EditItemInfo {...props}/>
        )
    }
    else if (props.type === "available") {
        return (
            <AvailableItemInfo {...props}/>
        )
    }
    else if (props.type === "placed-order") {
        return (
            <PlacedOrderItemInfo {...props}/>
        )
    }
    else if (props.type === "received-order") {
        return (
            <ReceivedOrderItemInfo {...props}/>
        )
    }

}

export default ItemInfoView
