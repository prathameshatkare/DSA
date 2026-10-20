const user ={
    name : "Rahul" ,

    greet : function(){
        console.log("HI",this.name)
    }
}

user.greet()



const user2 = {
    name : "Imran" , 
    greet  : user.greet
}

user.greet()
user2.greet()