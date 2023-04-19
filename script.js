const countvalue=document.querySelector('#counter');

const increment=() =>{
    
    // get the value from Ui
    let value=parseInt(countvalue.innerText);
    value=value+1;

    //Set the value from UI
    countvalue.innerText=value;


};

const decrement =() =>{
    // get the value from Ui
    let value=parseInt(countvalue.innerText);
    value=value-1;

    //Set the value from UI
    countvalue.innerText=value;

};