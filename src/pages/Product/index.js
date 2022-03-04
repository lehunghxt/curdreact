import React, { useState, useMemo } from 'react'
import Pagination from '../../components/Pagination';
let PageSize = 2;
const products = require('./products.json');

function Product() {
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <>
            <h3 className='text-left'>Danh sách sản phẩm</h3>
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
                            <button className='btn btn-sm btn-success'>Add Product</button>
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
                totalCount={products.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    )
}

export default Product