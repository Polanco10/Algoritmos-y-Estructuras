function validAnagram(array1,array2){
    // add whatever parameters you deem necessary - good luck!
    if(array1.length !=array2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
  
    for (let prop of array1 ) {
        obj1[prop] = (obj1[prop] || 0) + 1
    }
    for (let prop of array2 ) {
        obj2[prop] = (obj2[prop] || 0) + 1
    }
    for(let prop in obj1){
        if(obj1[prop]!=obj2[prop]){
            return false
        }
      }
      console.log(obj1,obj2)
      return true
    
  }
  
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true