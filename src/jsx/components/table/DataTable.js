import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import Offertable from "../Students/OfferTable";
import InternshipTable from "../Students/InternshipTable";

const DataTable = () => {
 return (
    <Fragment>
     <PageTitle
       activeMenu="Datatable"
       motherMenu="Table"
       pageContent="Datatable"
     />
     <div className="row">
       <Offertable />
       <InternshipTable />
       {/* <SimpleDataTable />
       <ProfileDatatable />
       <FeesCollection />
       <PatientTable /> */}
     </div>
   </Fragment>
 );
};

export default DataTable;