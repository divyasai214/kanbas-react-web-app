import {Link} from "react-router-dom";
function HelloWorld() {
    console.log('hi');
    return(
        <div>
        <Link to="/labs/a3">A3</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
        <h1>Hello World!</h1>
        </div>
    );
 };
 export default HelloWorld;