let data = [
    {
        name : 'Tatas',
        company : 'Arkademy',
        job : 'Trainer',
        status : 'Single',
        city : 'Jogja'
    },
    {
        name : 'Pratama',
        company : 'Emago',
        job : 'Trainer',
        status : 'Single',
        city : 'Jakarta'
    }
];

let dataCopy1 = [...data];
let update1 = dataCopy1.map(function(get){
    if(get.name == 'Tatas') {
        get.status = 'Menikah';
        get.city = 'Jakarta';
    }
    return get;
});
let update2 = dataCopy1.map(function(get2){
    if(get2.name == 'Pratama') {
        get2.city = 'Jogja';
    }
    return get2;
})
console.log(update1);
console.log(update2);