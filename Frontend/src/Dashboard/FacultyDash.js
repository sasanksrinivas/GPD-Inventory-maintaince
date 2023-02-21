import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from 'axios';
import moment from 'moment';
import BASE_URL from '../Services/HttpCommon';

function FacultyDash() {
    const [data, setData] = useState({});

    const laptopCount = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Laptop' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalLap = totalQt-assignedQt;
            const lastAddedLaptop = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setData({...data,totalLap,lastAddedLaptop});
            macCount();
        }).catch(function (error) {
            console.error(error);
        });
    }

    const macCount = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Macbook' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalMac = totalQt-assignedQt;
            const lastAddedMac = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalMac,lastAddedMac}));
            eraserCount();
        }).catch(function (error) {
            console.error(error);
        });
    }
    const eraserCount = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Erasers' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalErasers = totalQt-assignedQt;
            const lastAddedErasers = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalErasers,lastAddedErasers}));
            hdmiCount();
        }).catch(function (error) {
            console.error(error);
        });
    }
    const hdmiCount = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'HDMI' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalHDMI = totalQt-assignedQt;
            const lastAddedHDMI = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalHDMI,lastAddedHDMI}));
            markdersCount();
        }).catch(function (error) {
            console.error(error);
        });
    }
    const markdersCount = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Markers' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalMarkers = totalQt-assignedQt;
            const lastAddedMarker = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalMarkers,lastAddedMarker}));
            a4Count();
        }).catch(function (error) {
            console.error(error);
        });
    }
    const a4Count = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Markers' }
        };

        axios.request(options).then(function (response) {
            let totalQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='FACULTY')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalA4 = totalQt-assignedQt;
            const lastAddedA4 = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalA4,lastAddedA4}));
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    useEffect(() => {
        laptopCount();
    }, [])

    return (
        <Layout>
            <div className="app-main__inner">
                <div className="row">
                    <Link to="/assets/request/Laptop" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Laptop</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedLaptop ? moment(data.lastAddedLaptop).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalLap}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/assets/request/Macbook" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Macbook</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedMac ? moment(data.lastAddedMac).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalMac}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/assets/request/Erasers" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Erasers</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedErasers ? moment(data.lastAddedErasers).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalErasers}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/assets/request/HDMI" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-premium-dark">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">HDMI</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedHDMI ? moment(data.lastAddedHDMI).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-warning"><span>{data.totalHDMI}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/assets/request/Markers" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-warning">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Markers</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedMarker ? moment(data.lastAddedMarker).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalMarkers}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/assets/request/A4" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-info">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">A4</div>
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedA4 ? moment(data.lastAddedA4).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalA4}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default FacultyDash