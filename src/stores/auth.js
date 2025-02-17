import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),
    actions: {
        async login(email, password) {
            const auth = getAuth()
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password)
                this.user = userCredential.user
                this.isAuthenticated = true
            } catch (error) {
                console.error('Error to login:', error.message);
            }
        },
        async register(email, password) {
            const auth = getAuth()
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                this.user = userCredential.user
                this.isAuthenticated = true
                
            } catch (error) {
                console.error('Error to sigin:', error.message);
                
            }
        },
        logout() {
            const auth = getAuth()
            signOut(auth).then(()=> {
                this.user = null
                this.isAuthenticated = false
            })
            .catch((error) => {
                console.error('Error to logout', error.message);
                
            })
        },
        
    }
})

