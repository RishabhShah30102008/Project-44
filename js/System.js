class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    authenticate(actualcode,enteredcode){

        if(actualcode === enteredcode){
            return true
        } else{
            return false
        }
        
    }
    

}