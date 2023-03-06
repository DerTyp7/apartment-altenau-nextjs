# Apartment web app for Altenau

This app functions as a flyer for the apartment in Altenau. It has no booking functionality, but it does have a contact form.

## Firebase

We use Firebase for the backend. The app is configured to use the Firebase project `altenau-apartment`.  
Texts based on languages are stored in the `localeTexts` collection. Since NextJS caches the HTML file its not bad to always fetch the texts from the database.
