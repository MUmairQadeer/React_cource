import conf from '../conf/conf'
import {Client ,Account ,ID} from "appwrite"

export class AuthServices {
    client =new Client();
    account;
    constructor(){
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account =new Account(this.client)
        
    }
    async createAccount({ email,password ,name}){
        try{
            console.log("perfect here")
     const userAccount = await 
     this.account.create(ID.unique() ,email,password,name)
    if(userAccount){
        //call another method 
        return this.login({email ,password})
       
       
    }    
    else{
        return userAccount
    }
    }
        catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
            console.log("perfect here")
          return  await this.account.createEmailPasswordSession(email,password);

        }
        catch{
            throw error;
        }
    }
    async getCurrentUser(){
        try{
           
          return  await this.account.get();
        }
        catch(error){
            console.log("Appwrite Error ::getCurrentUser ::error " ,error)
        }
        return null;
    }
  async logout (){
    try{
 await this.account.deleteSessions();    }
    catch(error) {
 console.log("APPwrite service ::Logout::error", error);

    }
  }
}

const authService =new AuthServices()
export default authService;