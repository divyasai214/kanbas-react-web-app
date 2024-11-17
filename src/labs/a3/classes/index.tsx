import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous= false;
 return (
   <div>
     <h2>Classes</h2>
     <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
       Dynamic Blue background
     </div>
     <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
       dynamic color change
     </div>
     <div className="wd-bg-red wd-fg-black wd-padding-10px">
       Red background
     </div>
   </div>
 )
};
export default Classes;