
export const fireConfig = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    clientId: process.env.FIREBASE_CLIENT_ID, 
    authUri: process.env.FIREBASE_AUTH_URL, 
    tokenUri: process.env.FIREBASE_TOKEN_URL,  
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLEINT_CERT_URL
}