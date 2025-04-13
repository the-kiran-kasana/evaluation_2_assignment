// Problem: Two Sum Create a function that finds two numbers in an array that add up to a specific target. Return the indices of these two numbers.

function twosum(arr , target)
{
    let index = []
   for(let i=0;i<arr.length;i++)
   {
    for(let j=i+1;j<arr.length;j++)
    {
        let sum = arr[i] + arr[j]

        if(sum == target)
        {
            index.push(i)
            index.push(j)
            return index;
        }
    }
   }
}

let arr = [2, 7, 11, 15];
let target = 9
  console.log(twosum(arr , target))
 
