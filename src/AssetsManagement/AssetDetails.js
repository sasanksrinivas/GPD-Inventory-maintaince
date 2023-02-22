import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from 'moment';
import BASE_URL from '../Services/HttpCommon';
const $ = require("jquery")

function AssetDetails() {
    const [assets, setAssets] = useState([]);
    const [assigned, setAssigned] = useState([]);
    const [data, setData] = useState({});
    const [is_assigned, setIs_assigned] = useState(false);
    const [mount, setMount] = useState(false);

    const params = useParams();
    const getAssets = () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assets/listAssets',
            params: { key: 'assetName', value: params.assetName }
        };

        axios.request(options).then(function (response) {
            setAssets(response.data);
            const totalQt = response.data.reduce((Quantity, item) => {
                return Quantity + JSON.parse(item.assetTotalUnits);
            }, 0);
            const assignedQt = response.data.reduce((Quantity, item) => {
                return Quantity + JSON.parse(item.assetsOnRent);
            }, 0);
            setData({ ...data, totalQt, assignedQt });
        }).catch(function (error) {
            console.error(error);
        });
    }

    const assignedAssets = () => {
        const options1 = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation',
            params: { key: 'status', value: 'APPROVE' }
        };
        axios.request(options1).then(function (response) {
            console.log('check assets is ',response.data);
            setAssigned(response.data.filter((asset)=>(asset.assetName==params.assetName&&asset)));
            setMount(true)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getAssets();
        assignedAssets();
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
                    <div className="col-md-6 col-xl-4" style={{ cursor:'pointer' }} onClick={() => setIs_assigned(false)}>
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Total Assets</div>
                                    <div className="widget-subheading">Last updated at 14 Nov 2022</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{assets.length}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4" style={{ cursor:'pointer' }} onClick={() => setIs_assigned(false)}>
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Available Assets</div>
                                    <div className="widget-subheading">Last updated at 14 Nov 2022</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.totalQt - data.assignedQt}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4" style={{ cursor:'pointer' }} onClick={() => setIs_assigned(true)}>
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading">Asigned Assets</div>
                                    <div className="widget-subheading">Last updated at 14 Nov 2022</div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-white"><span>{data.assignedQt}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className={`main-card mb-3 card ${!is_assigned?'':'d-none'}`}>
                            <div className="card-header">Assets Lists
                                <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        <Link to={`/admin/assets/add/${params.assetName}`} className="active btn btn-focus">Add</Link>
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
                                            <th>Name</th>
                                            <th className="text-center">Assign To</th>
                                            <th className="text-center">Desc</th>
                                            <th className="text-center">Qt</th>
                                            <th className="text-center">Assigned Qt</th>
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
                                                <td className="text-center">{item.assetCategory}</td>
                                                <td className="text-center">{item.description}</td>
                                                <td className="text-center">{item.assetTotalUnits - item.assetsOnRent}</td>
                                                <td className="text-center">{item.assetsOnRent}</td>
                                                <td className="text-center">
                                                    <Link to={`/admin/assets/edit/${params.assetName}/${item.assetsId}`} className="btn btn-sm btn-primary">edit</Link>
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
                        <div className={`main-card mb-3 card ${is_assigned?'':'d-none'}`}>
                            <div className="card-header">Assigned Lists
                                <div className="btn-actions-pane-right">
                                    <div role="group" className="btn-group-sm btn-group">
                                        <Link to={`/admin/assets/add/${params.assetName}`} className="active btn btn-focus">Add</Link>
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
                                            <th className="text-center">Type</th>
                                            <th className="text-center">Asset Id</th>
                                            <th className="text-center">User Id</th>
                                            <th className="text-center">Requested At</th>
                                            <th className="text-center">Due Date</th>
                                            <th className="text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assigned.map((asset, key) => {
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
                                                                <div className="widget-heading">{asset.modelName}</div>
                                                                {/* <div className="widget-subheading opacity-7">Acer</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">{asset.assetDescription}</td>
                                                <td className="text-center">{asset.assetName}</td>
                                                <td className="text-center">{asset.assetId}</td>
                                                <td className="text-center">{asset.userId}</td>
                                                <td className="text-center">{moment(asset.requestedDate).format('l')}</td>
                                                <td className="text-center">{moment(asset.dueDate).format('l')}</td>
                                                <td className={`text-center ${asset.status == "APPROVE" ? 'text-success' : (asset.status == "PENDING" ? 'text-primary' : 'text-danger')} font-weight-bold`}>{asset.status}</td>
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

export default AssetDetails