import React, { useState, createContext,useEffect} from "react";
import CryptoJS from 'crypto-js';

// Create the context 
const AuthContext = createContext(null);

export const AuthProvider =({ children }) => {

	 // Using the useState hook to keep track of the value authed (if a 
   // user is logged in)
   const [authed, setAuthed] = useState();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const access_token=localStorage.getItem('token');
      if(access_token)
      {
         try {
            var bytes  = CryptoJS.AES.decrypt(access_token, 'token');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            const user = JSON.parse(originalText);
               setAuthed(user)
               setLoading(false);
         } catch (error) {
            localStorage.removeItem("token");
            setAuthed(false);
            setLoading(false);
         }
      }
      else{
         setAuthed(false);
         setLoading(false);
      }
   }, [])
   return (
			// Using the provider so that ANY component in our application can 
			// use the values that we are sending.
      <AuthContext.Provider value={{ authed, setAuthed,loading }}>
         {children}
      </AuthContext.Provider>
   );
};

// Finally creating the custom hook 
// export const useAuth = () => useContext(AuthContext);
export default AuthContext;