function Arrays (){
    
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];

    return (
     <>
      <h3>Working with arrays</h3>
      numberarray1 = {numberArray1}<br />
      stringarray1 = {stringArray1}<br/>
      VariableArray1 = {variableArray1}<br />
     </>
    )
  }
  export default Arrays