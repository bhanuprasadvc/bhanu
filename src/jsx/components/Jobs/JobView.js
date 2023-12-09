import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobView = () => {
 const [jobList, setJobData] = useState([]);
 const payload = {};
 useEffect(() => {
    axios
     .get(
       `https://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/jobs/get_job_list`,
       { params: payload },

       {
         headers: {
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Headers":
             "Origin, X-Requested-With, Content-Type, Accept, Authorization",
           "Content-Type":
             "application/x-www-form-urlencoded; charset=UTF-8;application/json",
         },
       }
     )
     .then((response) => {
       setJobData(response.data.data);
       console.log(response);
     })
     .catch((err) => console.log("err======", err));
 }, []);

 return (
   <>
     <div className="d-flex align-items-center mb-4 flex-wrap">
       <h4 className="fs-20 font-w600  me-auto">Job View</h4>
       <div>
         <Link to={"#"} className="btn btn-primary me-3 btn-sm">
           <i className="fas fa-plus me-2"></i>Add New Job
         </Link>
         <Link to={"#"} className="btn btn-secondary btn-sm me-3">
           {" "}
           <i className="fas fa-envelope"></i>
         </Link>
         <Link to={"#"} className="btn btn-secondary btn-sm me-3">
           <i className="fas fa-phone-alt"></i>
         </Link>
         <Link to={"#"} className="btn btn-secondary btn-sm">
           <i className="fas fa-info"></i>
         </Link>
       </div>
     </div>
     {jobList.map((data, index) => (
       <div className="row">
         <div className="col-xl-3 col-xxl-4">
           <div className="row">
             <div className="col-xl-12">
               <div className="card">
                 <div className="card-header border-0 pb-0">
                   <h4 className="fs-20 mb-0">Overview</h4>
                 </div>

                 <div className="card-body pt-4">
                   <div>
                     <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">Job Title:</h5>
                       <span>{data.name}</span>
                     </div>
                     <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">Experience:</h5>
                       <span>{data.status} years</span>
                     </div>
                     {/* <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">Vacancy:</h5>
                       <span>10</span>
                     </div> */}
                     <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">Job Type:</h5>
                       <span>Full-Type</span>
                     </div>
                     <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">
                         Posted Date:
                       </h5>
                       <span>{data.application_start_date}</span>
                     </div>
                     <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">
                         Last Apply Date:
                       </h5>
                       <span>{data.application_end_date}</span>
                     </div>
                     {/* <div className="mb-3 d-flex">
                       <h5 className="mb-1 fs-14 custom-label">
                         Closed Date:
                       </h5>
                       <span>12-8-2021</span>
                     </div> */}
                     <div className="card-footer border-0 pt-0 ">
                       <div className="d-flex justify-content-between flex-wrap">
                         <Link
                           to={"#"}
                           className="btn btn-primary btn-sm mb-3"
                         >
                           <i className="fas fa-check me-2 "></i>Send
                           Notification
                         </Link>
                         <Link
                           to={data.apply_online_url}
                           className="btn btn-outline-primary btn-sm mb-3"
                         >
                           <i className="fa fa-envelope"></i>&nbsp;Send Mail
                         </Link>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="col-xl-9 col-xxl-8">
           <div className="row">
             <div className="col-xl-12">
               <div className="card">
                 <div className="card-header d-block">
                   <h4 className="fs-20 d-block">
                     <Link to={"#"}>{data.category_name}</Link>
                   </h4>
                   <div className="d-block">
                     <span className="me-2">
                       <Link to={"#"}>
                         <i className="fas fa-briefcase me-2"></i>
                         {data.name}
                       </Link>
                     </span>
                     {/* <span className="me-2">
                       <Li nk to={"#"}>
                         <i className="fas fa-map-marker-alt me-2"></i>USA
                       </Link>
                     </span>
                     <span>
                       <Li nk to={"#"}>
                         <i className="fas fa-eye me-2"></i>View
                       </Link>
                     </span> */}
                   </div>
                 </div>
                 <div className="card-body">
                   {/* <h4 className="fs-20 mb-3">Description</h4> */}
                   <div className="ms-4">
                     {/* <p>
                       <i className="fas fa-dot-circle me-2"></i>
                       {data.message}
                     </p> */}
                     {/* <p>
                       <i className="fas fa-dot-circle me-2 "></i>Good
                       knowledge of SQL and related databases, with a
                       preference for those with MySQL experience.
                     </p>
                     <p>
                       <i className="fas fa-dot-circle me-2 "></i>Excellent
                       knowledge of the basic PHP 7 or web server exploits
                       along with their solutions.
                     </p>
                     <p>
                       <i className="fas fa-dot-circle me-2 "></i>Experience
                       building or maintaining a CMS.
                     </p>
                     <p>
                       <i className="fas fa-dot-circle me-2 "></i>Knowledge of
                       MVC frameworks.
                     </p>
                     <p>
                       <i className="fas fa-dot-circle me-2 "></i>A detailed
                       understanding of database design and administration.
                     </p>
                     <p>
                       <i className="fas fa-dot-circle me-2 "></i>The ability
                       to integrate a variety of data sources and databases
                       into a single system.
                     </p> */}
                   </div>
                   <hr />
                   <h4 className="fs-20 mb-3">Job Details</h4>
                   <div className="row mb-3">
                     <div className="col-xl-6">
                       <div className="ms-4">
                         <p className="font-w500 mb-3">
                           <span className="custom-label">Job Role :</span>
                           <span className="font-w400">
                             {" "}
                             {data.category_name}
                           </span>
                         </p>
                         <p className="font-w500 mb-3">
                           <span className="custom-label">Role:</span>
                           <span className="font-w400"> {data.feed_type}</span>
                         </p>
                         {/* <p className="font-w500 mb-3">
                           <span className="custom-label">Min Salary:</span>
                           <span className="font-w400"> $20,000</span>
                         </p>
                         <p className="font-w500 mb-3">
                           <span className="custom-label">Max Salary:</span>
                           <span className="font-w400"> $30,000</span>
                         </p> */}
                         {/* <p className="font-w500 mb-3">
                           <span className="custom-label">Job Tags:</span>
                           <span className="font-w400">
                             {" "}
                             PHP, Laravel, HTML5, SCSS,CSS, Javascript
                           </span>
                         </p> */}
                       </div>
                     </div>
                     <div className="col-xl-6">
                       <div className="ms-4">
                         <p className="font-w500 mb-3">
                           <span className="custom-label">
                             Job Experience:
                           </span>
                           <span className="font-w400"> {data.status}year+</span>
                         </p>
                         {/* <p className="font-w500 mb-3">
                           <span className="custom-label">Launges:</span>
                           <span className="font-w400"> Hindi, English</span>
                         </p> */}
                         {/* <p className="font-w500 mb-3">
                           <span className="custom-label">Locality:</span>
                           <span className="font-w400"> USA, UK, India</span>
                         </p> */}
                         <p className="font-w500 mb-3">
                           <span className="custom-label">Eligibility:</span>
                           <span className="font-w400">
                             {" "}
                             {data.educational_qualifications}
                           </span>
                         </p>
                         <p className="font-w500 mb-3">
                           <span className="custom-label">Company :</span>
                           <span className="font-w400">
                             {" "}
                             {data.name}
                           </span>
                         </p>
                       </div>
                     </div>
                   </div>
                   <div className="d-flex justify-content-between py-4 border-bottom border-top flex-wrap">
                     <span>Job ID: {data.id}</span>
                     {/* <span>
                       Posted By <strong>Company</strong>/ 12-01-2021
                     </span> */}
                   </div>
                 </div>
                 <div className="card-footer border-0">
                   <div>
                     <Link
                       to={"#"}
                       className="btn btn-primary btn-md me-2 mb-3"
                     >
                       <i className="far fa-check-circle me-2"></i>Send
                       Notification
                     </Link>
                     <Link
                       to={"#"}
                       className="btn btn-warning btn-md me-2 mb-3"
                     >
                       <i className="fas fa-share-alt me-2"></i>Share Job
                     </Link>
                     <Link to={"#"} className="btn btn-secondary btn-md mb-3">
                       <i className="fa fa-envelope"></i>&nbsp;Send Mail
                     </Link>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     ))}
   </>
 );
};
export default JobView;