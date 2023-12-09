import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import {nanoid} from 'nanoid';
import swal from "sweetalert";
import axios from "axios";
import { ButtonGroup, Dropdown, SplitButton } from "react-bootstrap";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
// import { Dimensions } from 'react-native';

const TableContent = [
	{ id:1, position:'Network Engineer', type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'Active'},
	{ id:2, position:'Entry Level Software Developer', type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021',cdate:'25-01-2021',status:'InActive'},
	{ id:3, position:'Java Developer', type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'Active'},
	{ id:4, position:'IOS Developer', 	type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'InActive'},
	{ id:5, position:'Junior Web Developer', type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'Active'},
	{ id:6, position:'SQL Developer', 	type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'InActive'},
	{ id:7, position:'Junior Developer', type:'Full-Time',pdate:'12-01-2021', ldate:'24-01-2021', cdate:'25-01-2021',status:'Active'},
];

const InviteStudent = () => {
	//Modal box
	const [addCard, setAddCard] = useState(false);
	const [addCard1, setAddCard1] = useState(false);
	const [contacts, setContacts] = useState(TableContent);
	const [inviteStudentList, setInviteStudentData] = useState([]);
const payload1 = { college_id: 1000, branch_id: 1000 }
    useEffect(() => {
        axios.get("http://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/InviteStudents/get_invited_students_list", { params: payload1 }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            }
        })
            .then(response => {
                setInviteStudentData(response.data.data);
                // console.log(response.data)
            })
            .catch(err => console.log("err======", err))
    }, []);
	// delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
	//Add data 
    const [addFormData, setAddFormData ] = useState({
        data:'',
        type:'',
		// pdate:'',
		// ldate:'',
		// cdate:'',
		// status:'',
    }); 
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.data.branch_name === ""){
            error = true;
			errorMsg = 'Please select branch';
        }
		else if(addFormData.file === ""){
            error = true;
			errorMsg = 'Please select file';
        }
        if(!error){
            const newContact = {
                id: nanoid(),
                position: addFormData.position,
                type:  addFormData.type,
			};
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setAddCard(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.position  = addFormData.type = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    };
	//Edit start 
	const [editModal, setEditModal] = useState(false);	
	// Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);
    // Edit function button click to edit
    const handleEditClick = ( event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            position: contact.position,
            type: contact.type,  
            // pdate: contact.pdate,  
            // ldate: contact.ldate,  
            // cdate: contact.cdate,  
            // status: contact.status,  
        }
        setEditFormData(formValues);
        setEditModal(true);
    };
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        position:'',
        type:'',
		// pdate:'',
		// ldate:'',
		// cdate:'',
		// status:'',
    })
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,	
			position: editFormData.position,
            type: 	editFormData.type,  
            // pdate: 	editFormData.pdate,  
            // ldate: 	editFormData.ldate,  
            // cdate: 	editFormData.cdate,  
            // status: editFormData.status,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);  
    }
	const [branchList, setBranchData] = useState([]);
 	const payload = {};
 	useEffect(() => {
    axios
     .get(
       `https://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/GenericAPI/get_branch_list
	   `,
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
       setBranchData(response.data.data);
       console.log(response);
     })
     .catch((err) => console.log("err======", err));
 	}, []);
	return(
		<>
			<div className="d-flex align-items-center mb-4 flex-wrap">
				<h4 className="fs-20 font-w600  me-auto">Invite Student List</h4>
				<div>
					<Link to={"#"} className="btn btn-primary me-3 btn-sm" onClick={()=> setAddCard(true)}>
						<i className="fas fa-plus me-2"></i>Import
					</Link>
					<Modal className="modal fade"  show={addCard} onHide={setAddCard} >
						<div role="document">
							<div className="">
								<form >
									<div className="modal-header">
										{/* <h4 className="modal-title fs-20">Add Contact</h4> */}
										<button type="button" className="btn-close" onClick={()=> setAddCard(false)} data-dismiss="modal"><span></span></button>
									</div>
									<div className="modal-body">
										<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
										<div className="add-contact-box">
											<div className="add-contact-content">
												<div className="form-group mb-3">
													<div className="card-body">
              										<div className="basic-form">
                										<form onSubmit={(e) => e.preventDefault()}>
                  											<div className="row align-items-center">
                    											<div className="col-auto my-1">
                      												<div className="form-group d-flex align-items-center">
																	  <label className="me-sm-2">Branch</label>                     													
                        												<select
                          													defaultValue={"option"}
                          													className="form-control form-control-lg"
                          													id="inlineFormCustomSelect"
                        												>
                          													<option value="option" disabled>
                            													Please select your branch
                          													</option>
																			{branchList.map((data) => (	
                          													<option value="1">{data.branch_name}</option>                         													
																			))}
                        												</select>
                      												</div>
                    											</div>
                  											</div>
                										</form>
              										</div>
         										</div>													
												<div className="input-group">
                    								<div className="from-file">
                      									<input type="file" className="form-file-input form-control" accept = ".xlsx, .xls, .csv"/>
                    								</div>
                  								</div>													
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="submit" className="btn btn-success" onClick={handleAddFormSubmit}>
											Import
										</button>   										
									</div>
								</div>
								</form>
								
							</div>
						</div>
					</Modal>
					{/* <Link to={"#"} className="btn btn-secondary btn-sm me-3"> <i className="fas fa-envelope"></i></Link> */}
					<Link to={"#"} className="btn btn-primary me-3 btn-sm" onClick={()=> setAddCard1(true)}>
					<i className="fas fa-envelope"></i>
					</Link>
					<Modal className="modal fade"  show={addCard1} onHide={setAddCard1} >
						<div role="document">
							<div className="">
								<form >
									<div className="modal-header">
										<button type="button" className="btn-close" onClick={()=> setAddCard1(false)} data-dismiss="modal"><span></span></button>
									</div>
									<div className="modal-body">
										<i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
										<div className="add-contact-box">
											<div className="add-contact-content">
												<div className="form-group mb-3">
													<div className="card-body">
              										<div className="basic-form">
                										<form onSubmit={(e) => e.preventDefault()}>
                  											<div className="row align-items-center">
                    											<div className="col-auto my-1">
                      												<div className="form-group d-flex align-items-center">
																	  <label className="me-sm-2"><strong>Branch</strong></label>
                        												<select
                          													defaultValue={"option"}
                          													className="form-control form-control-lg"
                          													id="inlineFormCustomSelect"
                        												>
                          													<option value="option" disabled>
                            													Please select your branch
                          													</option>
																			{branchList.map((data) => (																
                          													<option value="1">{data.branch_name}</option>
																			))}
                        												</select>
																		<button type="submit" className="btn btn-success" onClick={handleAddFormSubmit}>
																		Go
																		</button>
                      												</div>
                    											</div>
                  											</div>
                										</form>
              										</div>
         										</div>													
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="submit" className="btn btn-success" onClick={handleAddFormSubmit}>
											Invite 
										</button>
									</div>
								</div>
								</form>
							</div>
						</div>
					</Modal>
					<Link to={"#"} className="btn btn-secondary btn-sm me-3"><i className="fas fa-phone-alt"></i></Link>
					{/* <Link to={"#"} className="btn btn-secondary btn-sm"><i className="fas fa-info"></i></Link> */}
				</div>
			</div>	
			<div className="row">
				<div className="col-xl-12">
					<div className="table-responsive">
						<table className="table display mb-4 dataTablesCard job-table table-responsive-xl card-table dataTable no-footer" >
							<thead>
								<tr>
									<th>Full Name</th>
									<th>Email</th>
									<th>Phone No.</th>
									<th>Branch</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
                                {
                                    inviteStudentList.map(student =>
                                        <tr className="odd" role="row">
                                            <td>{student.student_name}</td>
                                            <td>{student.student_email}</td>
                                            <td>{student.student_contact_no}</td>
                                            <td>{student.branch_name}</td>
											<td></td>
											<td>
												<Dropdown
                								as="li"
                								className="nav-item dropdown notification_dropdown "
              									>
                								<Dropdown.Toggle className="nav-link i-false c-pointer" variant="" as="a"
                 	 							data-toggle="dropdown" aria-expanded="false"
                								>
                  								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    							<g data-name="Layer 2" transform="translate(-2 -2)">
                     	 						<path id="Path_20" data-name="Path 20" d="M22.571,15.8V13.066a8.5,8.5,0,0,0-7.714-8.455V2.857a.857.857,0,0,0-1.714,0V4.611a8.5,8.5,0,0,0-7.714,8.455V15.8A4.293,4.293,0,0,0,2,20a2.574,2.574,0,0,0,2.571,2.571H9.8a4.286,4.286,0,0,0,8.4,0h5.23A2.574,2.574,0,0,0,26,20,4.293,4.293,0,0,0,22.571,15.8ZM7.143,13.066a6.789,6.789,0,0,1,6.78-6.78h.154a6.789,6.789,0,0,1,6.78,6.78v2.649H7.143ZM14,24.286a2.567,2.567,0,0,1-2.413-1.714h4.827A2.567,2.567,0,0,1,14,24.286Zm9.429-3.429H4.571A.858.858,0,0,1,3.714,20a2.574,2.574,0,0,1,2.571-2.571H21.714A2.574,2.574,0,0,1,24.286,20a.858.858,0,0,1-.857.857Z" />
                    							</g>
                  								</svg>
                								</Dropdown.Toggle>
              									</Dropdown>
											</td>
                                            {/* <td>{handleStatus(student.status)}</td> */}
                                            {/* <td>
                                                <Link className="btn btn-primary btn-sm btn-rounded" to={`/user-profile/${student.id}`}>
                                                View Profile
                                            </Link>
                                                 <Button onClick={handleClick}>View Profile</Button>
                                            </td> */}
                                        </tr>
                                    )
                                }
                            </tbody>							
						</table>
					</div>		
				</div>	
				<div className="d-flex align-items-center justify-content-between flex-wrap">
					<div className="sm-mb-0 mb-3">
						<h5 className="mb-0">Showing 1 to 7 of 7 entries</h5>
					</div>
					<nav>
						<ul className="pagination pagination-circle">
							<li className="page-item page-indicator">
								<Link to={"#"} className="page-link">Prev</Link>
							</li>
							<li className="page-item active"><Link to={"#"} className="page-link">1</Link>
							</li>
							<li className="page-item page-indicator">
								<Link to={"#"} className="page-link">Next</Link>
							</li>
						</ul>
					</nav>
				</div>				
			</div>		
		</>
	)	
}
export default InviteStudent;