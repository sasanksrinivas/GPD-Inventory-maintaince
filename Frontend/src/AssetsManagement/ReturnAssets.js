import axios from 'axios'
import moment from 'moment'
import React, {useState,useEffect} from 'react'
import Swal from 'sweetalert2'
import Layout from '../Layout/Layout'
import BASE_URL from '../Services/HttpCommon'

export default function ReturnAssets() {
    const [returns, setReturns] = useState([])
    const getReturnAssets = async () => {
        const options = {
            method: 'GET',
            url: BASE_URL+'/ams-api/assetsAllocation/listAssetsAllocation?key=status&value=RETURN_REQUESTED',
        }
        axios.request(options)
        .then((res)=>{
            setReturns(res.data);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const approveReturns = (asset) => {
        const options ={
            method:'POST',
            url: BASE_URL+'/ams-api/assetsAllocation/addOrUpdate',
            data: {
                "assetsAllocationId":asset.assetsAllocationId, 
                "status":"RETURN_APPROVED"
            }
        }
        axios.request(options)
        .then((res)=>{
            if(res.data.result=="true")
            {
                getReturnAssets();
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
            console.log(error);
        })
    }
    useEffect(() => {
        getReturnAssets();
    }, [])
    
    return (
        <Layout>
            <div className="app-main__inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Return Assets
                            </div>
                            <div className="card-body">
                                 <div className="table-responsive">
                                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Asset Type</th>
                                                <th className="text-center">Asset Id</th>
                                                <th className="text-center">Requested Date</th>
                                                <th className="text-center">Assigned Date</th>
                                                <th className="text-center">Due Date</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {returns.map((asset,key) => { 
                                                return <tr key={key}>
                                                    <td>{key+1}</td>
                                                    <td>{asset.assetName}</td>
                                                    <td>{asset.assetId}</td>
                                                    <td>{asset.requestedDate}</td>
                                                    <td>{asset.allocatedDate}</td>
                                                    <td>{asset.dueDate}</td>
                                                    <td>{asset.status}</td>
                                                    <td>
                                                        <button className="btn btn-success" onClick={()=>approveReturns(asset)}>Approve</button>
                                                    </td>
                                            </tr>
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                                    
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
