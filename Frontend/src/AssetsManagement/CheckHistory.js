import axios from 'axios';
import moment from 'moment';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import BASE_URL from '../Services/HttpCommon';

export default function CheckHistory() {
    const [data, setData] = useState([])
    const params = useParams();
    const getAsset = () => {
        const options = {
            method: 'GET',
            url: BASE_URL + '/ams-api/assets/getAssetAllocatedHistory',
            params: { assetsId: params.id }
        };
        axios.request(options).then(function (response) {
            if (response.data.result == "true") {
                setData(response.data.allAllocations);
            }
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getAsset();
    }, [])
    
    return (
        <Layout>
            <div className="app-main__inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Asset History
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
                                                <th className="text-center">Username</th>
                                                <th className="text-center">Code</th>
                                                <th className="text-center">User type</th>
                                                <th className="text-center">Department</th>
                                                <th className="text-center">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((asset, key) => (<tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{asset.allocation.assetDescription}</td>
                                                <td>{asset.allocation.assetName}</td>
                                                <td>{asset.allocation.assetId}</td>
                                                <td>{asset.allocation.userId}</td>
                                                <td className="text-center">{asset.allocation.requestedDate}</td>
                                                <td className="text-center">{asset.allocation.allocatedDate}</td>
                                                <td className="text-center">{asset.allocation.dueDate}</td>
                                                <td className='text-info'>{asset.user.name}</td>
                                                <td className='text-primary'>{asset.user.code}</td>
                                                <td className='text-secondary'>{asset.user.role}</td>
                                                <td className='text-secondary'>{asset.user.department}</td>
                                                <td className={`text-center ${asset.allocation.status == "APPROVE" ? 'text-success' : (asset.allocation.status == "PENDING" ? 'text-primary' : 'text-info')} font-weight-bold`}>{asset.allocation.status}</td>
                                            </tr>))}
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
