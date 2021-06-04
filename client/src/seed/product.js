/* product image */
const jeans_product = 'jeans_product';
const ornaments_product = 'ornaments_product';
const saree_product = 'saree_product';
/* banner image */
const jeans_banner = 'jeans_banner';
const ornaments_banner = 'ornaments_banner';
const saree_banner = 'saree_banner';


/* 

db.collection('Products').doc().set({
    category: jeans_product, // "ornaments_product", jeans_product, saree_product
    createdAt: new Date(),
    images: ["https://cdn.shopify.com/s/files/1/0082/5091/6915/products/1_436c5ef8-4fb9-445b-b208-e7d5ae33615f_400x.jpg?v=1601048145"],
    inStock: [true],
    isDelete: false,
    name: "",
    price: ["599"],
    size: ['S','M', 'L' ] 
  });

  // Array update delete
https://cloud.google.com/firestore/docs/samples/firestore-data-set-array-operations


step 1 : import
const admin = require('firebase-admin');

step 2
const docRef = db.collection('cities').doc('DC');

// updated: step 3
const addResponse = const unionRes = await docRef.update({ docRef: admin.firestore.FieldValue.arrayUnion('greater_virginia')
});
// remove: step 3
const removeResponse = await docRef.update({ docRef: admin.firestore.FieldValue.arrayRemove('east_coast')});

 */

/* 



            const newValue = !isWishlist;
            console.warn("HARD CODED CURRENT USER ID");
            const currentUserId = currentUser.id; //'j54EipobSWRnDqSfLMmcIpJ1Z3E2'; 
            const wishlist = currentUser.wishlist; 
            const newWishlist = [ ...[...[].concat(wishlist)], productId];
            const docRef =  db.collection('Users').doc(currentUserId)
            const addResponse = await docRef.update({ wishlist: newWishlist});



*/