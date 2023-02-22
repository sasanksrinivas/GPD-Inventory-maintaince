import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import BASE_URL from '../Services/HttpCommon';


function StudentDash() {
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
                if(item.assetCategory=='ALL'||item.assetCategory=='STUDENT')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='STUDENT')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalLap = totalQt-assignedQt;
            const lastAddedLaptop = response.data.length&&response.data[response.data.length-1].assetAddedDate
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
                if(item.assetCategory=='ALL'||item.assetCategory=='STUDENT')
                 totalQt+=JSON.parse(item.assetTotalUnits);
            });
            let assignedQt=0;
            response.data.forEach((item) => {
                if(item.assetCategory=='ALL'||item.assetCategory=='STUDENT')
                assignedQt+=JSON.parse(item.assetsOnRent);
            });
            const totalMac = totalQt-assignedQt;
            const lastAddedMac = response.data.length&&response.data[response.data.length-1].assetAddedDate
            setData(prev=>({...prev,totalMac,lastAddedMac}));
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
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedLaptop?moment(data.lastAddedLaptop).format("ll"):moment().format("ll")} `}</div>
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
                                    <div className="widget-subheading">{`Last updated at ${data.lastAddedMac?moment(data.lastAddedMac).format("ll"):moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalMac}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default StudentDash