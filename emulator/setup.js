const admin = require('firebase-admin');
admin.initializeApp({ projectId: "just-cakes"});

const db = admin.firestore();

const product1 = {
  items: 10,
  name: 'Black',
  cost: 450,
  description: "its called black",
  imgUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN',
}
const product2 = {
  items: 1,
  name: 'White',
  cost: 250,
  description: "its called white",
  imgUrl: 'https://aclassictwist.com/wp-content/uploads/2016/05/Makeup-Cake-2-720x720.jpg',
}

function populateInventory(data){
  db.collection('inventory').add(data)
}

populateInventory(product1)
populateInventory(product2)