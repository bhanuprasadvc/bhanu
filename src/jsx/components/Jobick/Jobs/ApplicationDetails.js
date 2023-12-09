import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ApplicationDetails = () => {
 const [data, setData] = useState(
    document.querySelectorAll("#application-data tbody tr")
 );
 const sort = 8;
 const activePag = useRef(0);
 const [test, settest] = useState(0);

 // Active data
 const chageData = (frist, sec) => {
   for (var i = 0; i < data.length; ++i) {
     if (i >= frist && i < sec) {
       data[i].classList.remove("d-none");
     } else {
       data[i].classList.add("d-none");
     }
   }
 };
 // use effect
 useEffect(() => {
   setData(document.querySelectorAll("#application-data tbody tr"));
   //chackboxFun()
 }, [test]);
 // Active pagginarion
 activePag.current === 0 && chageData(0, sort);
 // paggination
 let paggination = Array(Math.ceil(data.length / sort))
   .fill()
   .map((_, i) => i + 1);
 // Active paggination & chage data
 const onClick = (i) => {
   activePag.current = i;
   chageData(activePag.current * sort, (activePag.current + 1) * sort);
   settest(i);
 };
 const chackbox = document.querySelectorAll(".application_sorting_1 input");
 const motherChackBox = document.querySelector(".sorting_asc input");
 const chackboxFun = (type) => {
   for (let i = 0; i < chackbox.length; i++) {
     const element = chackbox[i];
     if (type === "all") {
       if (motherChackBox.checked) {
         element.checked = true;
       } else {
         element.checked = false;
       }
     } else {
       if (!element.checked) {
         motherChackBox.checked = false;
         break;
       } else {
         motherChackBox.checked = true;
       }
     }
   }
 };
 return (
   <>
     <h4 className="fs-20 font-w600 me-auto">Job Title</h4>
     <div
       className="table-responsive dataTables_wrapper"
       id="application-data"
     >
       <table
         className="table display mb-4 dataTablesCard job-table table-responsive-xl card-table dataTable no-footer"
         id="example5"
       >
         <thead>
           <tr role="row">
             <th className="sorting_asc">
               <div className="form-check custom-checkbox">
                 <input
                   type="checkbox"
                   className="form-check-input"
                   id="checkAll"
                   required
                   onClick={() => chackboxFun("all")}
                 />
                 <label className="form-check-label" htmlFor="checkAll" />
               </div>
             </th>
             <th className="sorting_asc">No</th>
             <th className="sorting_asc">Student Name</th>
             <th className="sorting_asc">Branch</th>
             <th className="sorting_asc">Send Resume</th>
             <th className="sorting_asc">Views</th>
             <th className="sorting_asc">Call HR</th>
             <th className="sorting_asc">Resume Sent On</th>
             <th className="sorting_asc">Called HR On</th>
           </tr>
         </thead>
         <tbody>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>1.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="even">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>2.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>3.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>4.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>5.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>6.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>7.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>8.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>9.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
           <tr role="row" className="odd">
             <td className="application_sorting_1">
               <div className="checkbox me-0 align-self-center">
                 <div className="form-check  custom-checkbox ">
                   <input
                     type="checkbox"
                     onClick={() => chackboxFun()}
                     className="form-check-input"
                     id="check2"
                     required
                   />
                   <label className="form-check -label" htmlFor="check2" />
                 </div>
               </div>
             </td>
             <td>10.</td>
             <td className="wspace-no">Rahul</td>
             <td>Computer</td>
             <td>10</td>
             <td>Yes</td>
             {/* <td>Pending</td>
                            <td>Nicholas</td> */}
             <td>Yes</td>
             <td className="action-btn wspace-no">
               3-06-2022,Thursday,6:20p.m.
             </td>
             <td className="action-btn wspace-no">
               5-06-2022,Saturday,3:00p.m.
             </td>
           </tr>
         </tbody>
       </table>
       <div className="d-sm-flex text-center justify-content-between align-items-center">
         <div className="dataTables_info" id="example5_info">
           Showing {activePag.current * sort + 1} to{" "}
           {data.length > (activePag.current + 1) * sort
             ? (activePag.current + 1) * sort
             : data.length}{" "}
           of {data.length} entries
         </div>
         <div
           className="dataTables_paginate paging_simple_numbers"
           id="example5_paginate"
         >
           <Link
             to="/job-application"
             className="paginate_button previous disabled"
             onClick={() =>
               activePag.current > 0 && onClick(activePag.current - 1)
             }
           >
             Previous
           </Link>
           <span>
             {paggination.map((number, i) => (
               <Link
                 key={i}
                 to="/job-application"
                 className={`paginate_button  ${
                   activePag.current === i ? "current" : ""
                 } `}
                 onClick={() => onClick(i)}
               >
                 {number}
               </Link>
             ))}
           </span>
           <Link
             to="/job-application"
             className="paginate_button next"
             onClick={() =>
               activePag.current + 1 < paggination.length &&
               onClick(activePag.current + 1)
             }
           >
             Next
           </Link>
         </div>
       </div>
     </div>
   </>
 );
};
export default ApplicationDetails;