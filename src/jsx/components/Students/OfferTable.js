import axios from "axios";
import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

const OfferTable = () => {
 const [data, setData] = useState(
    document.querySelectorAll("#job_data tbody tr")
 );
 const sort = 5;
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
   setData(document.querySelectorAll("#job_data tbody tr"));
   // chackboxFun();
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


 return (
   <Fragment>
     <PageTitle
       activeMenu="OfferTable"
       motherMenu="Students"
       pageContent="OfferTable"
     />
     <div className="col-12">
       <div className="card">
         <div className="card-header">
           <h4 className="card-title">Offer Table</h4>
         </div>
         <div className="card-body">
           <div className="table-responsive">
             <div id="job_data" className="dataTables_wrapper">
               <table
                 className="display w-100 dataTable "
                 id="example5"
                 role="grid"
                 aria-describedby="example5_info"
               >
                 <thead>
                   <tr role="row">
                     <th className="sorting" st yle={{ width: "46px" }}>
                       Id
                     </th>
                     <th className="sorting_asc" st yle={{ width: "177px" }}>
                       Student Name
                     </th>
                     <th className="sorting" st yle={{ width: "278px" }}>
                       Position
                     </th>
                     <th className="sorting" st yle={{ width: "128px" }}>
                       Package
                     </th>
                     <th className="sorting" st yle={{ width: "114px" }}>
                       Joining date
                     </th>
                     <th className="sorting" st yle={{ width: "110px" }}>
                       Company name
                     </th>
                     <th className="sorting" st yle={{ width: "46px" }}>
                       Acceptance
                     </th>
                   </tr>
                 </thead>

                 <tbody>
                   <tr className="odd" role="row">
                   <td>1</td>
                   <td>Airi Satou</td>
                   <td>Front End Developer</td>
                   <td>6 LPA</td>
                   <td>20/06/2022</td>
                   <td>TCS</td>
                   <td>Yes</td>
                 </tr>
                 </tbody>
                 {/* <tfoot>
                   <tr>
                     <th rowSpan="1" colSpan="1">
                       Id
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Student Name
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Position
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Package
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Joining date
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Company
                     </th>
                     <th rowSpan="1" colSpan="1">
                       Acceptance
                     </th>
                   </tr>
                 </tfoot> */}
               </table>
               <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                 <div className="dataTables_info">
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
                     className="paginate_button previous disabled"
                     to="/table-datatable-basic"
                     onClick={() =>
                       activePag.current > 0 && onClick(activePag.current - 1)
                     }
                   >
                     <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                   </Link>
                   <span>
                     {paggination.map((number, i) => (
                       <Link
                         key={i}
                         to="/table-datatable-basic"
                         className={`paginate_button  ${activePag.current === i ? "current" : ""
                           } `}
                         onClick={() => onClick(i)}
                       >
                         {number}
                       </Link>
                     ))}
                   </span>
                   <Link
                     className="paginate_button next"
                     to="/table-datatable-basic"
                     onClick={() =>
                       activePag.current + 1 < paggination.length &&
                       onClick(activePag.current + 1)
                     }
                   >
                     <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </Fragment>
 );
};

export default OfferTable;