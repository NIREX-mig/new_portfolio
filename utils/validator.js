
import {z} from "zod";


const name = z.string().min(3, {message: "Name contains atleast 3 characters"});
const email = z.string().email({message: "Enter valid email"});
const message = z.string().min(10, {message : "Message contains atleast 10 characters "})

export const validation = (input) => {
    const nameIsValid = name.safeParse(input.name);
    const emailIsValid = email.safeParse(input.email);
    const messageIsValid = message.safeParse(input.message);

    let error = {}
    error.success = true;
    
    if(!nameIsValid.success){  
        error.success = false;
        error = {...error, name : nameIsValid.error?.issues[0].message}
    }

    if(!emailIsValid.success){
        error.success = false;
        error = {...error, email : emailIsValid.error?.issues[0].message}
    }
    
    if(!messageIsValid.success){
        error.success = false;
        error = {...error, message : messageIsValid.error.issues[0].message}
    }

    return error;

}

