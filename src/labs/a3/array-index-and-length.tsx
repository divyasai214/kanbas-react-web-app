function Array_IndexandLength (){
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    let stringArray1 = [ 'string1', 'string2']
    // adding new items
numberArray1.push(6);
stringArray1.push('string3');
let stringArray2 = [];
  for (let i = 0;
       i < stringArray1.length;
       i++) {
    const string1 = stringArray1[i];
    stringArray2.push(
      string1.toUpperCase());
  }


// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);

    return (
     <>
      <h3>Array Index and Length</h3>
      length1 = {length1}<br />
      index1 = {index1}<br/>

      <h3>Adding and removing data from Array</h3>
      numberArray1 = {numberArray1}<br />
      stringArray1 = {stringArray1}<br/>

      <h3>Looping through arrays</h3>
      stringArray2 = {stringArray2}<br/>
     
     </>
    )
  }
  export default Array_IndexandLength