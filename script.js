function mincost(arr)
{ 

	arr = arr.sort((a,b) => a-b);

	var sum = 0
const sumArr = arr.map((e) => {
    
    sum = sum+ e
    return sum
})

 console.log(sumArr)
 
 var totalSum = 0
 for(var i =1 ; i<sumArr.length ;i++){
     totalSum += sumArr[i] 
 }


	return totalSum
//write your code here
// return the min cost
  
}

module.exports=mincost;
