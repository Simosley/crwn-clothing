import firebase from 'firebase/app'
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('CIV7CFZ6EPnUoaVBeDd3').collection('cartItems').doc('oSD98aYnGIMR7ZTMd4Vo')
firestore.doc('/users/CIV7CFZ6EPnUoaVBeDd3/cartItems/oSD98aYnGIMR7ZTMd4Vo')
firestore.collection('/users/CIV7CFZ6EPnUoaVBeDd3/cartItems')