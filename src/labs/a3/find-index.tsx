function Find_index(){

    let numberArray1 = [2, 4, 6, 8, 10];
    let stringArray1 = ['string1', 'string2', 'string3'];
    let stringArray2 = ['string1', 'string2'];
    const four = numberArray1.find((a:number) => a === 4);
    const string3 = stringArray1.find((a:string) => a === 'string4');
    const fourIndex = numberArray1.findIndex((a:number) => a === 4);
    const string3Index = stringArray2.findIndex((a:string) => a === 'string3');
    return(
        
        <>
            <h3>Find Index</h3>
            four = {four}<br/>
            string3 ={string3}<br/>
            fourIndex = {fourIndex}<br/>
            string3Index = {string3Index}<br/>
        </>
    )

}
export default Find_index