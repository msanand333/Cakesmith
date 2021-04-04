import { ref } from "./const";

class ReviewSevice{
    
    async addReview(userId, productId, review, userInfo) {
        return ref().review.add({
            userId: userId,
            review: review,
            productId: productId,
            userInfo: userInfo,
        })
    }

    async shouldAllowToAdd(userId, productId) {
        const review = await ref().review.where('productId', '==', productId).where('userId', '==', userId).get()
        console.log(productId, userId, review.docs)
        return review.docs.length == 0
    }

    getReviewRef(productId){
        return ref().review.where('productId', '==', productId)
    }

    async getReview(productId){
        const reviews = await this.getReviewRef(productId).get()
        return reviews.docs
    }
}

export default new ReviewSevice()