import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import moongoose from "moongoose"
import User from "@/models/User"
import PaymentModel from "@/models/PaymentModel"

export const authOptions = NextAuth({
    
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      // ...add more providers here
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
       if(account.provider == "github"){
        const client = await mongoose.connect("mongodb://localhost:27017/petron")
        const currentUser = User.findOne({ email:email });
        if(!currentUser){
          const newUser = new User({
            email: email,
            username: email.split("@")[0]
            
          })
          await newUser.save()
          user.name = newUser.username
        }
        else{
          user.name = currentUser.username
        }
        return true;
       }
      }
    }
  })
  export  { authOptions as GET  , authOptions as POST}