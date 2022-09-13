
const Person = {
    constructor(personality, interests, hobbies){
        this.personality = personality
        this.interests = interests
        this.hobbies = hobbies

    }
}

class PostalWorker extends person {
   constructor(personality, interests, hobbies){
   super(personality, interests, hobbies)
        this.personality = ['boring', 'quiet']
        this.interests = ['plants', 'animals']
        this.hobbies = ['gardening']
        console.log(`I love ${hobbies}!!!`)
    }

    
    }

class Chef extends person {
    constructor(personality, interests, hobbies){
    super(personality, interests, hobbies)
    this.personality = ['outgoing']
    this.interests = ['drawing']
    this.hobbies = ['Disco dancing']
    console.log(`I love ${hobbies}!!!`)
    
}   
}

let postMan = new PostalWorker('outgoing', 'farming mushrooms', 'puzzles')
    console.log(postMan.language)
let postMan2 = new PostalWorker('shallow', 'gossip', ' basketball')
    console.log(postMan2.hobbies)
let chefWorker = new Chef('industrious', 'inovation', 'golf')
    console.log(chefWorker.hobbies)
let chefWorker2 = new Chef('talkative','food', 'stamps')
    console.log(chefWorker2.personality)

//////////////  Bank Account  ///////////////////////////////////////////////////////////////////////////////////////////////

class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = acctNum
    }
    deposit(){

    }
    withdraw(){
       this.overdraftFee = 25
    
    withdraw = 'overdraftFee'
    console.log(withdraw)
    }
}

class CheckingAccount extends BankAccount {
    constructor(overDraftProtection) {
        super(overDraftProtection)
        this.notAllowed = this.notAllowed
        withdraw = 'notAllowed'
        console.log(withdraw)
      }
    
      
      }






//const cohort27 = {
//    id: 'se-27-2022',
 //   students: [],
//    addStudent: function (params) {
//       this.students.push(params)
//    }
//}
//cohort27.addStudent('Mike')

//function myFunc(){
//    console.log(this)

//}
//myFunc()
//


////constructor(vin, make, color) {
////    this.vin= vin
////    this.make = make
////    this.color=  color
////    this.isRunning = false
////}
////StaticRange() {
////    this.isRunning = true
////    console.log('Vehicle is running...')
////}
////stop() {
////    this.isRunning = false
////    console.log('Vehicle stopped...')
////}

////const v1 = new Vehicle('xyz123', 'Honda', 'red')

//v1.start()
//v1.stop()

//console.log(v1)


















