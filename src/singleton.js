class User{
    constructor(){
        this.name = 'jacklon'
        this.age = 26
    }
}
User.getInstance = (function(){
    let instance = null
    return function(){
        if(instance){
            return instance
        }
        instance = new User
        return instance
    }
})()

const user1 = User.getInstance()
console.log('user1: ', user1);
const user2 = User.getInstance()
console.log('user2: ', user2);
const user = new User()
console.log('user: ', user);
console.log(user1===user2);
console.log(user===user2);
console.log(user===user1);