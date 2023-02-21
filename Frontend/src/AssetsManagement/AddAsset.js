import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../Layout/Layout'
import axios from "axios";
import moment from "moment";
import Swal from 'sweetalert2';
import BASE_URL from '../Services/HttpCommon';
function AddAsset() {
    const [data, setData] = useState({});
    const params = useParams();

    const add = (e) => {
        e.preventDefault();
        console.log('check data obj',data);
        const options = {
            method: 'POST',
            url: BASE_URL+'/ams-api/assets/addOrUpdate',
            data: {
                assetsId: 0,
                assetAddedDate: moment().format("L"),
                assetCategory: data.assetCategory,
                assetName: params.name,
                modelName:data.modelName,
                assetTotalUnits: data.assetTotalUnits,
                assetsOnRent: 0,
                imgPath: data.imgPath,
                description: data.description
            }
        };

        axios.request(options).then(function (response) {
            if(response.data.result=='true')
            {
                Swal.fire({
                    text:'Asset Added successfully',
                    confirmButtonText:'ok',
                    icon:'success'
                });
            }
            else{
                Swal.fire({
                    text:'Something went wrong',
                    confirmButtonText:'ok',
                    icon:'error'
                });
            }
            console.log(response.data);
        }).catch(function (error) {
            Swal.fire({
                text:'Something went wrong',
                confirmButtonText:'ok',
                icon:'error'
            });
            console.error(error);
        });
    }

    return (
        <Layout>
            <div className="app-main__inner">
                <div className="card">
                    <div className="card-header">
                        <p className='my-auto'>Add Assets</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={add}>
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="form-group">
                                        <label>Asset Name</label>
                                        <input type="text" className="form-control" onChange={(e)=>{setData({...data,modelName:e.target.value})}}  />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Assign To</label>
                                        <div className="form-group">
                                          <select className="form-control" onChange={(e)=>{setData({...data,assetCategory:e.target.value})}}>
                                            <option value={'STUDENT'}>Student</option>
                                            <option value={'FACULTY'}>Faculty</option>
                                            <option value={'ALL'}>All</option>
                                          </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" className="form-control" onChange={(e)=>{setData({...data,description:e.target.value})}}  />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <input type="number" className="form-control"  onChange={(e)=>{setData({...data,assetTotalUnits:e.target.value})}} />
                                    </div>
                                    <div className="form-group">
                                        <label>Img URL</label>
                                        <input type="text" className="form-control"  onChange={(e)=>{setData({...data,imgPath:e.target.value})}} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary float-right">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default AddAsset