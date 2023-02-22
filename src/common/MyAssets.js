import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Layout from '../Layout/Layout'
import moment from "moment"
import useAuth from '../UseAuth'
import BASE_URL from '../Services/HttpCommon';
import Swal from 'sweetalert2';
const $ = require("jquery")

function MyAssets() {
    const [assets, setAssets] = useState([]);
    const [mount, setMount] = useState(false);

    const { authed } = useContext(useAuth);
    const getAssets = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
            params: { key: 'userId', value: authed.userId }
        };

        axios.request(options).then(function (response) {
            setAssets(response.data);
            setMount(true);
        }).catch(function (error) {
            console.error(error);
        });
    }
    const assetReturn = async (asset) => {
        const options = {
            method: 'POST',
            url: BASE_URL+'/ams-api/assetsAllocation/addOrUpdate',
            data: {
                "assetsAllocationId":asset.assetsAllocationId,
                "status":"RETURN_REQUESTED"
            }
        }
        axios.request(options).then((res)=>{
            if(res.data.result=="true")
            {
                getAssets();
            }
            else{
                Swal.fire({
                    text:'Something went wrong',
                    icon:'error',
                    confirmButtonText:'ok'

                })
            }
        })
        .catch((error)=>{
            Swal.fire({
                text:'Something went wrong',
                icon:'error',
                confirmButtonText:'ok'

            })
        })
    }
    useEffect(() => {
        getAssets();
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
                            <div className="card-header">My Assets
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Asset</th>
                                                <th className="text-center">Asset Type</th>
                                                <th className="text-center">Asset Id</th>
                                                <th className="text-center">Requested Date</th>
                                                <th className="text-center">Assigned Date</th>
                                                <th className="text-center">Due Date</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assets.map((asset, key) => {
                                                return <tr className={asset.expiryStatus=="todayExpire"&&'bg-ripe-malin'} key={key}>
                                                    <td className="text-center text-muted">{key+1}</td>
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
                                                    <td className="text-center">{moment(asset.requestedDate).format("YYYY MM D")}</td>
                                                    <td className="text-center">{asset.allocatedDate && moment(asset.allocatedDate).format("YYYY MM D")}</td>
                                                    <td className="text-center">{moment(asset.dueDate).format("YYYY MM D")}</td>
                                                    <td className={`text-center ${asset.status == "APPROVE" ? 'text-success' : 'text-primary'} font-weight-bold`}>{asset.status}</td>
                                                    <td className='text-center'>
                                                        <button className="btn btn-info font-weight-bold" onClick={()=>assetReturn(asset)} >Return</button>
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

export default MyAssets