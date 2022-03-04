import React, { useState, useMemo } from 'react'
import Pagination from '../../components/Pagination';
let PageSize = 5;
const users = require('./users.json');

function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return users.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <>
            <h3 className='text-left'>Danh sách sản phẩm</h3>
            <table className='table table-bordered table-striped table-hover table-sm text-sm'>
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>name</th>
                        <th>username</th>
                        <th>email</th>
                        <th>street</th>
                        <th>suite</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>lat</th>
                        <th>lng</th>
                        <th className='text-center'>
                            <button className='btn btn-sm btn-success'>Add User</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentTableData.map((pro, index = 0) =>
                            <tr key={index}>
                                <td className='text-center'>{(PageSize * (currentPage - 1)) + (index + 1)}</td>
                                <td>{pro.name}</td>
                                <td>{pro.username}</td>
                                <td>{pro.email}</td>
                                <td>{pro.address?.street}</td>
                                <td>{pro.address?.suite}</td>
                                <td>{pro.address?.city}</td>
                                <td>{pro.address?.zipcode}</td>
                                <td>{pro.address?.geo?.lat}</td>
                                <td>{pro.address?.geo?.lng}</td>
                                <td className='text-center'>
                                    <i className="fa fa-pencil-square-o text-warning mr-1 ml-1" aria-hidden="true"></i>
                                    <i className="fa fa-trash-o text-danger mr-1 ml-1" aria-hidden="true"></i>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={users.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <div className="modal fade bd-example-modal-lg show" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style={{ display: 'block', paddingRight: '17px' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">Large modal</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User