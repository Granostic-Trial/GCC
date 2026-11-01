// =====================================================================
// KONFIGURASI FIREBASE (notifikasi HP). Isi sesuai project Firebase Anda.
// Dipakai oleh index.html dan sw.js. Jangan diubah selain nilai di dalamnya.
// =====================================================================

// Firebase console → Project settings → General → Your apps → Web app → Config
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCFOBBdEd2mF5pJEXlumJpIiHETnmIuwH8",
    authDomain: "granostic-command-center.firebaseapp.com",
    projectId: "granostic-command-center",
    storageBucket: "granostic-command-center.firebasestorage.app",
    messagingSenderId: "177997945741",
    appId: "1:177997945741:web:fd7c09f04c962a83663bc4"
};

// Firebase console → Project settings → Cloud Messaging → Web Push certificates → Key pair
// (isi setelah langkah VAPID key selesai)
var GCS_VAPID_KEY = "BLNm-G9lr07ic0nMr9Y6cdnz9b9RAla9xxuRqBqaTOYIloj35KiT2r5GLob9nnOZvyu0IuqgwEK_Rt7EUJmDrhA";
