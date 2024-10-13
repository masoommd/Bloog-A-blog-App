import conf from '../conf/conf.js'
import {Client, Account, ID } from 'appwrite'

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            let userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method to direct login after signup
                return this.login({email,password});
            }
            else{
                return userAccount;
            }
        }
        catch(err){
            throw err;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(err){
            throw err;
        }
    }

    async getCurrentUser (){
        try {
            return await this.account.get(); // it return current user information
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logot error::",error);
                        
        }
    }
}

const authService  =  new AuthService();
export default authService