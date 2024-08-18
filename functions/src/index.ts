import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const assignRoleOnSignUp = functions.auth.user().onCreate(
  async (user) => {
    const uid = user.uid;
    let role = "user"; // Default role

    // Optionally assign role based on some criteria
    if (user.email === "admin@example.com") {
      role = "admin";
    }

    try {
      await admin.firestore().collection("users").doc(uid).set({
        role: role,
      });
      console.log(`Role "${role}" assigned to user "${uid}"`);
    } catch (error) {
      console.error(
        `Error assigning role to user "${uid}": ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
);
