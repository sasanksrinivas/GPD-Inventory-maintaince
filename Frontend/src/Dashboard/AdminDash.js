import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from 'moment';
import BASE_URL from '../Services/HttpCommon';

function AdminDash() {
    const [Laptop, setLaptop] = useState({});
    const [Macbook, setMacbook] = useState({});
    const [Erasers, setErasers] = useState({});
    const [HDMI, setHDMI] = useState({});
    const [markers, setMarkers] = useState({});
    const [A4, setA4] = useState({});


    useEffect(() => {

        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Laptop' }
        };

        axios.request(options).then(function (response) {
            const lastAddedLaptop = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setLaptop({length:response.data.length,lastAddedLaptop})
        }).catch(function (error) {
            console.error(error);
        });
        const options1 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Macbook' }
        };

        axios.request(options1).then(function (response) {
            const lastAddedMac = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setMacbook({length:response.data.length,lastAddedMac})
        }).catch(function (error) {
            console.error(error);
        });
        const options2 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Erasers' }
        };

        axios.request(options2).then(function (response) {
            const lastAddedErasers = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setErasers({length:response.data.length,lastAddedErasers})
        }).catch(function (error) {
            console.error(error);
        });
        const options3 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'HDMI' }
        };

        axios.request(options3).then(function (response) {
            const lastAddedHDMI = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setHDMI({length:response.data.length,lastAddedHDMI})
        }).catch(function (error) {
            console.error(error);
        });
        const options4 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'Markers' }
        };

        axios.request(options4).then(function (response) {
            const lastAddedMarker = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setMarkers({length:response.data.length,lastAddedMarker})
        }).catch(function (error) {
            console.error(error);
        });
        const options5 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: 'A4' }
        };

        axios.request(options5).then(function (response) {
            const lastAddedA4 = response.data.length&&response.data[response.data.length-1].assetAddedDate;
            setA4({length:response.data.length,lastAddedA4})
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <Layout>
            <div className="app-main__inner">
                <div className="row">
                    <Link to="/admin/asset/details/Laptop" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Laptop</div>
                                    <div className="widget-subheading">{`Last updated at ${Laptop.lastAddedLaptop ? moment(Laptop.lastAddedLaptop).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{Laptop ? Laptop.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/asset/details/Macbook" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Macbook</div>
                                    <div className="widget-subheading">{`Last updated at ${Macbook.lastAddedMac ? moment(Macbook.lastAddedMac).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{Macbook ? Macbook.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/asset/details/Erasers" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Erasers</div>
                                    <div className="widget-subheading">{`Last updated at ${Erasers.lastAddedErasers ? moment(Erasers.lastAddedErasers).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{Erasers ? Erasers.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/asset/details/HDMI" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-premium-dark">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">HDMI</div>
                                    <div className="widget-subheading">{`Last updated at ${HDMI.lastAddedHDMI ? moment(HDMI.lastAddedHDMI).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-warning"><span>{HDMI ? HDMI.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/asset/details/Markers" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-warning">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Markers</div>
                                    <div className="widget-subheading">{`Last updated at ${markers.lastAddedMarker ? moment(markers.lastAddedMarker).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{markers ? markers.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/admin/asset/details/A4" className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-info">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">A4</div>
                                    <div className="widget-subheading">{`Last updated at ${A4.lastAddedA4 ? moment(A4.lastAddedA4).format("ll") : moment().format("ll")} `}</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{A4 ? A4.length : 0}</span></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>

    )
}

export default AdminDash