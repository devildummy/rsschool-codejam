module.exports = sumOfOther = (array) =>{
    const result = array.map((item, i, arr)=>{ 
        return arr.reduce((acc, curr)=>acc+curr) - item;
    });

    return result;
};