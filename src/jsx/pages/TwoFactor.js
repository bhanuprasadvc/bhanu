import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// image
import logo from "../../images/freshment.png";
import logo2 from "../../images/TwoFV.png";
import backArrow from "../../images/back_arrow.png";
import { useState } from "react";
const TwoFactor = ({ history }) => {
 const [email, setEmail] = useState('');

 const onSubmit = (e) => {
    e.preventDefault();
   setEmail(e.target.value)



   axios.get("https://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/college/verify_college_two_factor?college_email=adarshbuhecha27@gmail.com", email ,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
       // "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
       'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json'
            }
        }).then(res => {
     console.log("res==",res);
   })
   .catch(err => {
     console.log("err==",err)
   })
   history.push("/dashboard");
 };
 return (
   <div className="authincation h-100 p-meddle">
     <div className="container h-100">
       {" "}
       <div className="row justify-content-center h-100 align-items-center">
         <div className="col-md-6">
           <div className="authincation-content">
             <div className="row no-gutters">
               <div className="col-xl-12">
                 <div className="auth-form">
                 <div className="text-left mb-3">
                     <Link to="/login">
                       <img src={backArrow} alt="" />
                     </Link>
                   </div>
                   <div className="text-center mb-3">
                       <img src={logo} alt="" />
                   </div>
                   <h3 className="text-center mb-4 ">2 Step Verification</h3>
                   <div className="text-center mb-3">
                       <img src={logo2} alt="" />
                   </div>
                   <div><br/></div> 
                   
                   <form onSubmit={(e) => onSubmit(e)}>
                     <div className="form-group">
                       <label className="">
                         <strong>Enter Your Code </strong>
                       </label>
                       <input
                         type="text"
                         className="form-control"
                       />
                     </div>
                     <div><br/><br/></div>
                     <div className="text-center">
                       <button
                         type="submit"
                         className="btn btn-primary"
                       >
                         SUBMIT
                       </button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default TwoFactor;