import { ref } from "./const";

class ReviewSevice{
    
    async addReview(userId, productId, review) {
        return ref().review.add({
            userId: userId,
            review: review,
            productId: productId,
        })
    }

    async shouldAllowToAdd(userId, productId) {
        const review = await ref().review.where('productId', '==', productId).where('userId', '==', userId).get()
        console.log(productId, userId, review.docs)
        return review.docs.length == 0
    }

    async getReview(productId){
        const reviews = await ref().review.where('productId', '==', productId).get()
        return reviews.docs
    }
}

export default new ReviewSevice()