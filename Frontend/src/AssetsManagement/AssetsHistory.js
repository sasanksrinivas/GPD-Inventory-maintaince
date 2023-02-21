import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import BASE_URL from '../Services/HttpCommon';
const $ = require("jquery")

function AssetsHistory() {
    const [assets, setAssets] = useState([]);
    const [mount, setMount] = useState(false);
    const getHistory = () => {
        let firstRes = [];
        // const options = {
        //     method: 'GET',
        //     url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
        //     params: { key: 'status', value: 'PENDING' }
        // };
        const options1 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
            params: { key: 'status', value: 'APPROVE' }
        };
        const options2 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
            params: { key: 'status', value: 'DECLINE' }
        };
        // axios.request(options).then(function (response) {
        //     setAssets(response.data);
        axios.request(options1).then(function (response) {
            firstRes = response.data;
            // setAssets((prev)=>([...prev,...response.data]));
            axios.request(options2).then(function (response) {
                setAssets([...firstRes, ...response.data]);
                setMount(true);
            }).catch(function (error) {
                console.error(error);
            });
        }).catch(function (error) {
            console.error(error);
        });
        // }).catch(function (error) {
        //     console.error(error);
        // });

    }
    useEffect(() => {
        getHistory();
    }, [])
    useEffect(() => {
        if (assets.length) {
            $('table').dataTable(
                {
                    dom: 'lBfrtip',
                }
            );
        }
    }, [mount])

    return (
        <Layout>
            <div className="app-main__inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Assets Requests
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Asset</th>
                                                <th className="text-center">Type</th>
                                                <th className="text-center">Asset Id</th>
                                                <th className="text-center">User Id</th>
                                                <th className="text-center">Requested At</th>
                                                <th className="text-center">Assigned At</th>
                                                <th className="text-center">Due Date</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">History</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assets.map((asset, key) => {
                                                return <tr className={asset.expiryStatus=="todayExpire"&&'bg-ripe-malin'} key={key}>
                                                    <td className="text-center text-muted">{key + 1}</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">{asset.assetDescription}</div>
                                                                    {/* <div className="widget-subheading opacity-7">Acer</div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{asset.assetName}</td>
                                                    <td className="text-center">{asset.assetId}</td>
                                                    <td className="text-center">{asset.userCode}</td>
                                                    <td className="text-center">{moment(asset.requestedDate).format("YYYY MM D")}</td>
                                                    <td className="text-center">{asset.allocatedDate}</td>
                                                    <td className="text-center">{asset.dueDate}</td>
                                                    <td className={`text-center ${asset.status == "APPROVE" ? 'text-success' : (asset.status == "PENDING" ? 'text-primary' : 'text-danger')} font-weight-bold`}>{asset.status}</td>
                                                    <td>
                                                        <Link className="btn font-weight-bold btn-sm btn-warning" to={`/history/assets/${asset.assetId}`}>check</Link>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="d-block text-center card-footer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AssetsHistory