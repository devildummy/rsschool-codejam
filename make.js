module.exports = make = (...args) =>{
    const store=[];
    const reducer = (...args) =>{
        if (args[0] instanceof Function){
            return store.reduce(args[0]);
        }
        args.forEach((item)=>{
            store.push(item);
        });
        
        return reducer;
    };
    return reducer(...args);
};