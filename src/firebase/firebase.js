import * as firebase from 'firebase'
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database()

export {firebase, database as default}


//expenses.forEach((expense) => database.ref('expenses').push(expense))


// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    //console.log(snapshot.key, snapshot.val())
})

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    //console.log(snapshot.key, snapshot.val())
})

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
    //console.log('ADDED:',snapshot.key, snapshot.val())
})

// const onValueChange = ((snapshot) => {
//     const expensesArray = []
//     snapshot.forEach((childSnapshot) => {
//         expensesArray.push({
//             ...childSnapshot.val(),
//             id: childSnapshot.key
//         })
//     })
//     console.log(expensesArray)
// })

// database.ref('expenses').on('value', onValueChange)



// const onValueChanged = (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job} in ${val.location.city}`)
// }
// database.ref().on('value', onValueChanged)

// const onValueChanged = (snapshot) => {
//     const val = snapshot.val()
//     console.log('Data', val)
// }
// database.ref('location/city').on('value', onValueChanged)

// database.ref('location/city').once('value')
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log('Data', val)
// }).catch((e) => {
//     console.log('This failed', e)
// })



// database.ref().set({
//       name: 'Andrew Mead',
//       age: 26,
//       isSingle: false,
//       location: {
//           city: 'Luebeck',
//           country: 'Germany'
//       } 
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((e) => {
//     console.log('This failed', e)
//   })


// database.ref('age').set(27)

// database.ref('location/city').set('Hamburg')

// database.ref('attributes').set({
//     height: 181,
//     weight: 81
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// // database.ref('isSingle').set(null)
// // .then(() => {
// //     console.log('Data is saved')
// // }).catch((e) => {
// //   console.log('This failed', e)
// // })

// setTimeout(() => {
//     database.ref().update({
//         name: 'Nina Mead',
//         age: 16,
//         isSingle: null,
//         job: 'student',
//         location: {
//             city: 'Hamburg',
//             country: 'Germany'
//         }
//     }).then(() => {
//         console.log('Data is updated')
//     }).catch((e) => {
//       console.log('This failed', e)
//     })
// }, 3500)

// setTimeout(() => {
//     database.ref('location/city').off('value', onValueChanged)
//     console.log('Subscription cancelled')
// }, 7000)

// setTimeout(() => {
//     database.ref().update({
//         name: 'Nina Mead',
//         age: 16,
//         isSingle: null,
//         job: 'student',
//         location: {
//             city: 'Cologne',
//             country: 'Germany'
//         }
//     }).then(() => {
//         console.log('Data is updated')
//     }).catch((e) => {
//       console.log('This failed', e)
//     })
// }, 13500)

// database.ref().update({
//     name: 'Nina Mead',
//     age: 16,
//     isSingle: null,
//     job: 'student',
//     location: {
//         city: 'Hamburg',
//         country: 'Germany'
//     }
// }).then(() => {
//     console.log('Data is updated')
// }).catch((e) => {
//   console.log('This failed', e)
// })

