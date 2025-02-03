In a Firebase project, I encountered an issue where data wasn't being written to the Firestore database despite seemingly correct code.  The `set()` method appeared to execute without errors, but the data wasn't reflected in the database.  This only happened intermittently, making debugging more challenging.  The code used standard Firebase SDK functions in JavaScript within a React application.  Here's a snippet:

```javascript
db.collection('myCollection').doc('myDoc').set(myData)
.then(() => {
  console.log('Data written successfully!');
})
.catch((error) => {
  console.error('Error writing document: ', error);
});
```

This code would occasionally produce the success message, but the `myData` would not appear in Firestore.