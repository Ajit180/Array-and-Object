const shoppingcart =['milk','coffee','Tea','Honey'];


// Step 1: Add 'Meat' to the beginning if it hasn't been added already
if (!shoppingcart.includes('Meat')) {
    shoppingcart.unshift('Meat');
}

// Step 2: Add 'Sugar' to the end if it hasn't been added already
if(!shoppingcart.includes('Sugar')){
    shoppingcart.push('Sugar');
}

//Step 3: Remove 'Honey' if you are allergic to it
if (shoppingcart.includes('Honey')) {
    const index = shoppingcart.indexOf('Honey');
    if (index!==-1) {
        shoppingcart.splice(index,1);
    }
    
}

//Step 4: Modify 'Tea' to 'Green Tea'
const teaindex =shoppingcart.indexOf('Tea');
if(teaindex!==-1){

    shoppingcart[teaindex] ='Green Tea';
}


console.log(shoppingcart);