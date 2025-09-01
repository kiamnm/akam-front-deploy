const addItemtoLocalStorage = (id, amount) => {
  let prevItems
  if(localStorage.getItem("cartItem")){
    prevItems = JSON.parse(localStorage.getItem("cartItem")) 
  }else{
    prevItems=[]
  }
  
  const newItems = [...prevItems, { id, amount }];
  localStorage.setItem("cartItem", JSON.stringify(newItems));
};

const changeItemAmountInLocalStorage = (id, amount) => {
    console.log(id,amount,"ksksmklmklskmlsmkl");
  const prevItems = JSON.parse(localStorage.getItem("cartItem")) ;

  const updatedItems = prevItems.map((item) =>
    item.id === id ? { ...item, amount } : item
  );

  localStorage.setItem("cartItem", JSON.stringify(updatedItems));
};

const deleteItemFromLocalStorage = (id) => {
  const prevItems = JSON.parse(localStorage.getItem("cartItem")) || [];

  const updatedItems = prevItems.filter((item) => item.id !== id);

  localStorage.setItem("cartItem", JSON.stringify(updatedItems));
};

const getAll=()=>{
    const products=JSON.parse(localStorage.getItem("cartItem"))
    
    if(!products ||products?.length===0){
        return false
    }
    return products
}

export { addItemtoLocalStorage,changeItemAmountInLocalStorage,deleteItemFromLocalStorage,getAll };