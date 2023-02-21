import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import BASE_URL from '../Services/HttpCommon';
const $ = require("jquery")

function AproveAssets() {
    const [assets, setAssets] = useState([]);
    const [mount, setMount] = useState(false);

    const getPending = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
            params: { key: 'status', value: 'PENDING' }
        };

        axios.request(options).then(function (response) {
            setAssets(response.data);
            setMount(true);
        }).catch(function (error) {
            console.error(error);
        });
    }
    const approavedAsset = (asset,status) => {
        if(asset.dueDate!=null&&status==="APPROVE"||status==="DECLINE")
        {
            
            const options = {
                method: 'POST',
                url: BASE_URL+'/ams-api/assetsAllocation/addOrUpdate',
                data: { assetsAllocationId: asset.assetsAllocationId, status: status, dueDate:asset.dueDate }
            };
    
            axios.request(options).then(function (response) {
                if(response.data.result=="true")
                {
                    Swal.fire({
                        text:`Asset ${status.toLowerCase()}d successfully!`,
                        icon:"success",
                        confirmButtonText:'ok'
                    }).then(()=>{
                        getPending();
                    })
                }
                else{
                    Swal.fire({
                        text:'Something went wrong!',
                        icon:"error",
                        confirmButtonText:'ok'
                    }).then(()=>{
                        getPending();
                    })
                }
            }).catch(function (error) {
                console.error(error);
            });
        }
        else{
            Swal.fire({
                text:`Please select target date!`,
                icon:"info",
                confirmButtonText:'ok'
            })
        }
    }
    useEffect(() => {
        getPending();
    }, [])
    useEffect(() => {
        if (assets.length) {
            $('table').dataTable(
                {
                    dom: 'lfrtip',
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
                                            <th className="text-center">Due Date</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Target Date</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.map((asset, key) => {
                                            return <tr key={key}>
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
                                                <td className="text-center">{moment(asset.requestedDate).format('l')}</td>
                                                <td className="text-center">{asset.dueDate}</td>
                                                <td className={`text-center ${asset.status == "APPROVE" ? 'text-success' : 'text-primary'} font-weight-bold`}>{asset.status}</td>
                                                <td>
                                                        <div className="form-group">
                                                            <input type="date" className="form-control" onChange={(e) => (asset.dueDate = e.target.value)} pattern="\d{4}-\d{2}-\d{2}" />
                                                            <small id="helpId" className="form-text text-muted">Note:- Target Date is asset due date!</small>
                                                        </div>
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-success" onClick={()=>approavedAsset(asset,'APPROVE')} >Approve</button>
                                                    <button className="btn btn-danger ml-2" onClick={()=>approavedAsset(asset,'DECLINE')} >Decline</button>
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

export default AproveAssets