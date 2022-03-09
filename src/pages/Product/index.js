import React, { useState, useMemo } from 'react'
import MyVerticallyCenteredModal from '../../components/Modal/MyVerticallyCenteredModal';
import Pagination from '../../components/Pagination';
import FormProduct from './components/FormProduct';
let PageSize = 2;
const products = require('./products.json');

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [idPro, setIdPro] = useState()
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    const HandleAdd = (e) => {
        e.preventDefault();
        setModalShow(true);
        setIdPro(null);
    }
    const HandleEdit = (e, id) => {
        e.preventDefault();
        setModalShow(true);
        setIdPro(id);
    }
    return (
        <>
            <h3 className='text-left'>Danh sách sản phẩm</h3>
            <div className='card'>
                <table className='table table-bordered table-striped table-hover table-sm text-sm'>
                    <thead>
                        <tr>
                            <th>stt</th>
                            <th>name</th>
                            <th>detail</th>
                            <th>price</th>
                            <th>hero</th>
                            <th>offer</th>
                            <th>image</th>
                            <th className='text-center'>
                                <button onClick={(e) => HandleAdd(e)} className='btn btn-sm btn-success'>Thêm sản phẩm</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentTableData.map((pro, index = 0) =>
                                <tr key={index}>
                                    <td className='text-center'>{(PageSize * (currentPage - 1)) + (index + 1)}</td>
                                    <td>{pro.name}</td>
                                    <td>{pro.detail}</td>
                                    <td>{pro.price}</td>
                                    <td>{pro.hero}</td>
                                    <td>{pro.offer}</td>
                                    <td>{pro.image}</td>
                                    <td className='text-center'>
                                        <i onClick={(e) => HandleEdit(e, pro.id)} className="fa fa-pencil-square-o text-warning mr-1 ml-1" aria-hidden="true"></i>
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
                    totalCount={products.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
                <MyVerticallyCenteredModal
                    title={idPro ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                >
                    <FormProduct idPro={idPro} />
                </MyVerticallyCenteredModal>
            </div>
        </>
    )
}

export default Product