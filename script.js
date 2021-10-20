function newForEach(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}
function newMap(arr,callback){
    const res = []
    for(let i=0;i<arr.length;i++){
        res.push(callback(arr[i],i,arr))
    }
    return res
}
function newFilter(arr,callback){
    const res = []
    for (let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}
function newFind(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            return arr[i]
        }
        return undefined
        //tecnicamente desnecessário pois, 
        //caso não haja retorno, ele é undefined por padrão
    }
}
function newFindIndex(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            return i
        }
        return -1
    }
}
function newReduce(arr,callback,valorInicial){
    if(valorInicial===undefined){
        let result = arr[0]
    }else{
        result=callback(valorInicial,arr[0],0,arr)
    }    
    for(let i=1;i<arr.length;i++){
        result = callback(result,arr[i],i,arr)
    }
    return result
}
function newSome(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
            return true
        }
    }
    return false
}
function newEvery(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(!callback(arr[i],i,arr)){
            return false
        }
        return true
    }
}
function newFill(arr,value,start=0,end=arr.length){
    for(let i=start;i<end;i++){
        arr[i]=value
    }
}
function newIncludes(arr,element,start=0){
    for(let i=start;i<arr.length;i++){
        if(arr[i]===element){
            return true
        }
    }
    return false
}
function newIndexOf(arr,element,start=0){
    for(let i=start;i<arr.length;i++){
        if(arr[i]===element){
            return i
        }
    }
    return -1
}
function newConcat(...arr){
    // const result = [...arr]
    //não sei se isso pode dar algum problema
    return arr
}
function newJoin(arr, between=","){
    let result =""
    for(let i=0;i<arr.length-1;i++){
        result += arr[i]
        result += between
    }
    result+=arr[length-1]
    return result
}
