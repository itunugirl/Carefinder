"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.facebookProvider = exports.googleProvider = exports.db = exports.auth = void 0;
// src/firebaseConfig/index.ts
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var analytics_1 = require("firebase/analytics");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC1-cywD2Y2BwUEePRSCwqkJD8bk9CWCg0",
    authDomain: "medease-408ff.firebaseapp.com",
    projectId: "medease-408ff",
    storageBucket: "medease-408ff.appspot.com",
    messagingSenderId: "479510684902",
    appId: "1:479510684902:web:a4403885ce36c1ead80727",
    measurementId: "G-0W9NXVPGJ6"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
// Initialize Firebase Authentication and Firestore
var auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
var db = (0, firestore_1.getFirestore)(app);
exports.db = db;
// Initialize authentication providers
var googleProvider = new auth_1.GoogleAuthProvider();
exports.googleProvider = googleProvider;
var facebookProvider = new auth_1.FacebookAuthProvider();
exports.facebookProvider = facebookProvider;
// Conditionally initialize Analytics only in the browser environment
var analytics;
if (typeof window !== 'undefined') {
    (0, analytics_1.isSupported)().then(function (supported) {
        if (supported) {
            exports.analytics = analytics = (0, analytics_1.getAnalytics)(app);
        }
    });
}
