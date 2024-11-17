function VariableTypes() {
    var numberVariable = 123;
    let floatingPointNumber = -234.345;
    const stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return(
      <div>
        <h2>Variables Types</h2>
        numberVariable = { numberVariable }<br/>
        floatingPointNumber = { floatingPointNumber }<br/>
        stringVariable = { stringVariable }<br/>
        booleanVariable = { booleanVariable + "" }<br/>
        isNumber = { isNumber }<br/>
        isString = { isString }<br/>
        isBoolean = { isBoolean }<br/>
      </div>
    );
  }
  export default VariableTypes