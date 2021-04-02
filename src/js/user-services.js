const { ref } = require("./const");

class UserServices {

  async addUser(userId, userInfo){
    return ref().user.doc(userId).set({
      ...userInfo,
      userId
    })
  }

  async getUserInfo(userId){
    return (await ref().user.doc(userId).get()).data()
  }
}

export default new UserServices()