{
  user: {
    <user-id>: {
      name: string,
      email: string,
      role: ['admin'],
      address: string,
      gender: <male: 0, female: 1, others: 2>,
      dob: <timestamp>,
      address: string,
      city: string,
      contact: string,
    }
  },
  orders: {
    <order-id>: {
      total: float,
      status: <accepted|rejected|preparing|Delivered>,
      archived: bool, // if true then order should be shown in order history else in current orders
      placedUserId: string,
      userName: string,
      email: string,
      address: string,
      products: [
        {
          name: string,
          productId: string
          quantity: int,
          total: float,
        }
      ]
    }
  },
  inventory: {
    <product-id>: {
      items: int,
      name: string,
      category: [id1, id2],
      cost: int,
      description: string,
      imgUrl: string,
    }
  },
  review: {
    <review-id>: {
      userId: <user-id>,
      review: string,
      productId: <product-id>,
    }
  }
}