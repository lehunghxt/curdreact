import React, { useState, useMemo } from 'react'
import Pagination from '../../components/Pagination';
let PageSize = 10;
const posts = require('./posts.json')

function Post() {
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return posts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <>
            <h3>Danh sách bài viết</h3>
            <div className='card'>
                <table className='table table-bordered table-striped table-hover table-sm text-sm'>
                    <thead>
                        <tr className='text-center'>
                            <th>STT</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>
                                <button className='btn btn-sm btn-success'>Thêm bài viết</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentTableData.map((post, index = 0) =>
                                <tr key={index}>
                                    <td className='text-center'>{(PageSize * (currentPage - 1)) + (index + 1)}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td className='text-center' style={{ whiteSpace: 'nowrap' }} >
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
                    totalCount={posts.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    )
}

export default Post