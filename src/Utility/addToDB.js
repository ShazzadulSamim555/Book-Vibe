const getStoredData=()=>{
    const getBooksSTR=localStorage.getItem("ReadList");

    if(getBooksSTR){
        const storedBookData=JSON.parse(getBooksSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}
const addToStoredDB=(id)=>{
    console.log('Successfully mark',id);
    const storedBookData=getStoredData();

    if(storedBookData.includes(id)){
       alert("This Book is already Exist.");
    }
    else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("ReadList",data);
    };
};

export {addToStoredDB, getStoredData};