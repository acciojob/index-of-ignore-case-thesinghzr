function indexOfIgnoreCase(s1, s2) {
    s1 = s1.toUpperCase();
    s2 = s2.toUpperCase();
    let length = s2.length;

    for(let i = 0; i <= s1.length-length; i++){
        
        if(s1.slice(i, i+length) === s2){
            return i;
        }
    }
    return -1;
}
  
  
  const s1 = prompt("Enter s1:");
  const s2 = prompt("Enter s2:");
  alert(indexOfIgnoreCase(s1, s2));