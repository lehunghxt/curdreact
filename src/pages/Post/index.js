import React, { useState, useMemo, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../../components/Modal/MyVerticallyCenteredModal';
import Pagination from '../../components/Pagination';
import FormPost from './components/FormPost';
let PageSize = 10;


function Post() {
    const [currentPage, setCurrentPage] = useState(1);
    const [modalShow, setModalShow] = useState(false);
    const [idPost, setIdPost] = useState(null);
    const [posts, setPosts] = useState({})
    const [title, setTitle] = useState({})

    useEffect(() => {
        const dataPosts = require('./posts.json')
        setPosts(dataPosts);
    }, [])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if (posts && posts.length > 0)
            return posts?.slice(firstPageIndex, lastPageIndex);
        else return [];
    }, [currentPage, posts]);

    const HandleModalEdit = (e, id) => {
        e.preventDefault();
        setModalShow(true);
        setIdPost(id)
    }
    const HandleModalAdd = (e) => {
        e.preventDefault();
        setModalShow(true);
        setIdPost(null)
    }
    const HandleSearch = (e) => {
        e.preventDefault();
        var res = [];
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].title === title) {
                res.push(posts[i]);
            }
        }
        setPosts(res);
        console.log(res);
    }

    return (
        <>
            <h3>Danh sách bài viết</h3>
            <div className='card p-2 mb-3'>
                <form className='row'>
                    <div className='col-6'>
                        <div className="form-group">
                            <input type="text" className="form-control" id="title" placeholder="Tiêu đề bài viết" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group">
                            <input type="text" className="form-control" id="title" placeholder="Nội dung bài viết" />
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col-12'>
                        <button
                            type="submit"
                            className="btn btn-sm btn-success"
                            onClick={(e) => HandleSearch(e)}
                        >Tìm kiếm</button>
                    </div>
                </div>
            </div>
            {
                posts && posts.length > 0 ?
                    <>
                        <div className='card'>
                            <table className='table table-bordered table-striped table-hover table-sm text-sm'>
                                <thead>
                                    <tr className='text-center'>
                                        <th>STT</th>
                                        <th>Title</th>
                                        <th>Content</th>
                                        <th>
                                            <Button className='btn btn-sm btn-success' variant="primary" onClick={(e) => HandleModalAdd(e)}>
                                                Thêm bài viết
                                            </Button>
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
                                                    <i onClick={(e) => HandleModalEdit(e, post.id)} className="fa fa-pencil-square-o text-warning mr-1 ml-1" aria-hidden="true"></i>
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
                        <MyVerticallyCenteredModal
                            title={idPost ? 'Cập nhật bài viết' : 'Thêm bài viết'}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        >
                            <FormPost idPost={idPost} />
                        </MyVerticallyCenteredModal>
                    </>
                    : <></>
            }

        </>
    )
}

export default Post