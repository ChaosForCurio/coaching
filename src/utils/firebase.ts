import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// Replace these with your actual keys from the Firebase Console
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN || "demo-auth-domain",
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID || "demo-project-id",
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET || "demo-storage",
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "demo-sender",
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID || "demo-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
