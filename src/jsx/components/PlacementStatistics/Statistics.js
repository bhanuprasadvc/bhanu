import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

//import
import ProfileStrength from '../Jobick/Statistics/ProfileStrength';
import NetworkSection from '../Jobick/Statistics/NetworkSection';
import VacanciesStatsTab from '../Jobick/Statistics/VacanciesStatsTab';
import CanvasChartTab from '../Jobick/Home/CanvasChartTab';
import FeaturedCompanies from '../Jobick/Home/FeaturedCompanies';
import axios from 'axios';

const Statistics = ()=> {

    const [statistics, setPlacementStatistics] = useState([]);
    const payload = { college_id: 1000 }
   useEffect(() => {
       axios.get("http://freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/College/get_placement_statistics", { params: payload }, {
           headers: {
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
           }
       })
           .then(response => {
               setPlacementStatistics(response.data.data);
           })
           .catch(err => console.log("err======", err))
   }, []);

    return(
        <>
            <div className="row">
                <div className="col-xl-12 mt-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row shapreter-row">
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="fas fa-eye"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={statistics.total_placed_students} duration={2}/>
                                                </h3>
                                                <span className="fs-14">Total Placed students</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="far fa-comments"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={statistics.total_unplaced_students} duration={2}/>
                                                </h3>
                                                <span className="fs-14">Total Unplaced Students</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="fas fa-suitcase"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={statistics.highest_package} duration={2}/>
                                                </h3>
                                                <span className="fs-14">Highest Package</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="fas fa-suitcase"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={25} duration={2}/>
                                                </h3>
                                                <span className="fs-14">App. Answered</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="fas fa-calendar"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={221} duration={2}/>
                                                </h3>
                                                <span className="fs-14">Interviewed</span>
                                            </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-sm-4 col-6">
                                            <div className="static-icon">
                                                <span>
                                                    <i className="fas fa-phone-alt"></i>
                                                </span>
                                                <h3 className="count">
                                                    <CountUp end={4} duration={2}/>
                                                </h3>
                                                <span className="fs-14">Hired</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <ProfileStrength />
                        </div>
                        <div className="col-xl-6">
                            <NetworkSection />
                        </div>
                        <div className="col-xl-12">
                            <VacanciesStatsTab />
                        </div>    
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">        
                                    <CanvasChartTab />
                                </div>
                            </div>
                        </div>    
                        <div className="col-xl-6">
                            <div className="row">    
                                <div className="col-xl-12">
                                    <FeaturedCompanies />
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>
            </div>        
        </>
    )
}
export default Statistics;