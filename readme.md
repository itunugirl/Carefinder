# MedEase - Carefinder

MedEase (Carefinder) is a simple yet powerful tool designed to make access to healthcare information in Nigeria easier. It helps users find, export, and share hospital details within their region, ensuring that critical healthcare information is just a few clicks away.

## Features

### 1. Hospital Search
- **Find Hospitals:** Users can search for hospitals within their region by inputting their location or selecting from a list of nearby cities. The platform will provide a list of hospitals along with their contact details, including address, phone number, and email.

### 2. Export Hospitals
- **Save Information:** Users can export the list of hospitals to a CSV file, making it easy to save and share hospital details. This feature leverages Firebase's built-in file storage.

### 3. Share Hospitals
- **Share Information:** Users can share the list of hospitals with others via email or by generating a shareable link. This feature is implemented using Firebase's email and link-sharing functionalities.

### 4. User Authentication
- **Secure Access:** Admin users must create an account to access the platform's admin features. This feature is implemented using Firebase's authentication system, supporting multiple methods like email/password and social media logins.

### 5. Markdown Support
- **Content Creation:** Admin users can create and format hospital entries using markdown syntax. The platform includes a simple text editor that supports markdown, making it easy to add links, format content, and insert images.

## Requirements

To ensure the project meets best practices, the following are required:
1. **Scalable Codebase:** The codebase should be scalable with proper linting and formatting using Prettier and ESLint.
2. **TypeScript with React or Vue.js:** Use TypeScript in combination with either React or Vue.js to build the frontend. Ensure the application is optimized for SEO.
3. **Backend Technology:** Implement the backend using Firebase, Hasura, or any suitable technology that supports user data storage and authentication.
4. **Form Validation:** Implement robust form validation to ensure data integrity.
5. **Markdown Support:** Admin users must be able to write content using markdown syntax.

## Project Structure

