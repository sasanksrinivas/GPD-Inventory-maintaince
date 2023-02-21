import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from 'moment/moment';
import useAuth from '../UseAuth';
import Swal from 'sweetalert2';
import BASE_URL from '../Services/HttpCommon';

const $ = require("jquery")


function Request() {
    const [assets, setAssets] = useState([]);
    const [mount, setMount] = useState(false);
    const { authed } = useContext(useAuth);

    const params = useParams();
    const getAssets = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: params.assetName }
        };
        axios.request(options).then(function (response) {
            let filterData = [];
            response.data.forEach((item) => {
                if ((item.assetCategory == 'ALL' || item.assetCategory == authed.role)&&(item.assetTotalUnits - item.assetsOnRent))
                    filterData.push(item);
            });
            console.log('check this fiter ', filterData)
            setAssets(filterData);
            setMount(true);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const requestAsset = (item) => {
            const options = {
                method: 'POST',
                url: BASE_URL+'/ams-api/assetsAllocation/addOrUpdate',
                data: {
                    assetsAllocationId: 0,
                    assetId: item.assetsId,
                    assetCategory:item.assetCategory,
                    assetName:item.assetName,
                    requestedDate: moment().format("L"),
                    status: 'PENDING',
                    userId: authed.userId
                }
            };
            axios.request(options).then(function (response) {
                if (response.data.result == "true") {
                    Swal.fire({
                        text: 'Request submitted successfully!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    });
                    getAssets();
                }
                else{
                    Swal.fire({
                        text: response.data.error,
                        icon: 'error',
                        confirmButtonText: 'ok'
                    });
                    getAssets();

                }
            }).catch(function (error) {
                console.error(error);
                Swal.fire({
                    text: 'Something went wrong!',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                getAssets();
            });
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
                            <div className="card-header">Assets Lists
                                <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        {/* <button className="btn btn-focus">All Month</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Asset</th>
                                                <th>Desc</th>
                                                <th>Added at</th>
                                                <th className="text-center">Avail Qt</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assets.map((item, key) => {
                                                return <tr key={key}>
                                                    <td className="text-center text-muted">{key + 1}</td>
                                                    <td>
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <div className="widget-content-left">
                                                                        <img width={40} className="rounded-circle" src={item.imgPath} alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="widget-content-left flex2">
                                                                    <div className="widget-heading">{item.modelName}</div>
                                                                    {/* <div className="widget-subheading opacity-7">Acer</div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{item.description}</td>
                                                    <td className="text-center">{moment(item.assetAddedDate).format('l')}</td>
                                                    <td className="text-center">{item.assetTotalUnits - item.assetsOnRent}</td>
                                                    <td className="text-center">
                                                        <button onClick={() => { requestAsset(item) }} className="btn btn-sm btn-primary">Request</button>
                                                    </td>
                                                </tr>
                                            })
                                            }
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

export default Request