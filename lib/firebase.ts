// File: lib/firebase.js

import admin from 'firebase-admin'
import { fireConfig } from './fireConfig'

try {
  const credential = JSON.parse(process.env.FIREBASE_CONFIG!)

  admin.initializeApp({
    credential: admin.credential.cert(credential),
  })
  console.log('Initialized.')
} catch (error: any) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}

const firestore = admin.firestore()
const auth = admin.auth()
export {firestore, auth}
