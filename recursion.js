module.exports = recursion = (obj) =>{
    const result=[];
    deepth=0;
    const recFinder=(obj,deepth)=>{
        if(!result[deepth]){
            result[deepth]=[];
        }
        result[deepth].push(obj.value);
        if(!obj.left && !obj.right){
            return result;
        }
        recFinder(obj.left,deepth+1);
        recFinder(obj.right,deepth+1);
        return result;
    };
    return recFinder(obj,deepth);
};