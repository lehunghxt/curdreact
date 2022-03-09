import React, { useState, useMemo, useEffect } from 'react'
import Pagination from '../../components/Pagination';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../components/Modal/MyVerticallyCenteredModal';
import FormUser from './components/FormUser'
let PageSize = 5;
const users = require('./users.json');

function User() {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return users.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    useEffect(() => {
        console.log('admin@123');
    }, [])

    return (
        <>
            <h3 className='text-left'>Danh sách thành viên</h3>
            <div className='card'>
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
                                <Button className='btn btn-sm btn-success' variant="primary" onClick={() => setModalShow(true)}>
                                    Thêm thành viên
                                </Button>
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
                <MyVerticallyCenteredModal
                    title='Thêm thành viên'
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                >
                    <FormUser />
                </MyVerticallyCenteredModal>
            </div>
        </>
    )
}
export default User