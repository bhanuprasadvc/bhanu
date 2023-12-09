import React, { useMemo, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';
import MOCK_DATA from '../table/FilteringTable/MOCK_DATA_2.json';
import { COLUMNS } from '../table/FilteringTable/Columns';
import { GlobalFilter } from '../table/FilteringTable/GlobalFilter';
//import './table.css';
import '../table/FilteringTable/filtering.css';
// import axios from 'axios';
import axios from 'axios';
import { useEffect } from 'react';



export const StudentsList = () => {
    const [studentList, setStudentData] = useState([]);
    const payload = { college_id: 1000 }
    useEffect(() => {
        axios.get(`https://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/students/get_student_list`, { params: payload }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            }
        })
            .then(response => {
                setStudentData(response.data.data);
            })
            .catch(err => console.log("err======", err))
    }, []);

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

    const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    }, useFilters, useGlobalFilter, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        page,
        gotoPage,
        pageCount,
        pageOptions,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        setGlobalFilter,
    } = tableInstance


    const { globalFilter, pageIndex } = state

    // return(
    //     <div>
    //         <ul>
    //         {
    //         studentList.map(student =>
    //             <li key={student.id}>{student.name}</li>
    //         )
    //         }
    //         </ul>
    //     </div>
    // )
    return (
        <>
            <PageTitle activeMenu="StudentsList" motherMenu="Students" />
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Students List</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                        <table {...getTableProps()} className="table dataTable display">
                            <thead>
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                                {/* {column.canFilter ? column.render('Filter') : null} */}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            {/* <tbody {...getTableBodyProps()} className="" > */}

                            <tbody>
                                {
                                    studentList.map(student =>
                                        <tr className="odd" role="row">
                                            <td>{student.name}</td>
                                            <td>{student.mobile}</td>
                                            <td>{student.email}</td>
                                            <td>{student.branch_id}</td>
                                            <td>{student.status}</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                            {/* </tbody> */}
                        </table>
                        <div className="d-flex justify-content-between">
                            <span>
                                Page{' '}
                                <strong>
                                    {pageIndex + 1} of {pageOptions.length}
                                </strong>{''}
                            </span>
                            <span className="table-index">
                                Go to page : {' '}
                                <input type="number"
                                    className="ml-2"
                                    defaultValue={pageIndex + 1}
                                    onCha nge={e => {
                                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                        gotoPage(pageNumber)
                                    }}
                                />
                            </span>
                        </div>
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
                        {/* <div className="text-center">
                            <div className="filter-pagination  mt-3">
                                <button className=" previous-button" onCl ick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>

                                <button className="previous-button" onCl ick={() => previousPage()} disabled={!canPreviousPage}>
                                    Previous
                                </button>
                                <button className="next-button" onCl ick={() => nextPage()} disabled={!canNextPage}>
                                    Next
                                </button>
                                <button className=" next-button" onCl ick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )

}
export default StudentsList;