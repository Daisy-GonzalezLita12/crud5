
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics, isSupported } from "firebase/analytics"


const firebaseConfig = {
  apiKey: "AIzaSyAGoLg3EjfI6IXy7H5DRKgPzx3osmP9vr8",
  authDomain: "registro-a3b4a.firebaseapp.com",
  projectId: "registro-a3b4a",
  storageBucket: "registro-a3b4a.firebasestorage.app",
  messagingSenderId: "165715388209",
  appId: "1:165715388209:web:3765060692f9a5efcc7210",
  measurementId: "G-4XJ82F9ZE1"
}


const app = initializeApp(firebaseConfig)

// Analytics solo se inicializa si el entorno lo soporta (evita errores en SSR o browsers restrictivos)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app)
  }
}).catch(() => {})


export const db = getFirestore(app)