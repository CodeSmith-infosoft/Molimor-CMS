import { JSX, ReactNode } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

type ComponentProps = {
    data: any[];
    header: {
        title: string | JSX.Element;
        dataIndex: string;
        key: string;
        render?: (text: any, record: any) => ReactNode
    }[];
    isPagination?: boolean;
    page?: string;
    totalDocs?: string;
    loading?: boolean;
}

const CommonTable: React.FC<ComponentProps> = ({ data, header, isPagination, page, totalDocs, loading }) => {
    return (
        <div className='common-table'>
            <Table className='mb-0'>
                <thead>
                    <tr>
                        {header.length ? header.map((data) => <th>{data.title}</th>) : <th>No Header</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.length ?
                        data.map(col => (
                            <tr>
                                {header.map(row => (
                                    <td>{row.render ? row.render(col[row.dataIndex], col) : col[row.dataIndex]}</td>
                                ))}
                            </tr>
                        ))
                        : <tr><td>{loading ? "Fetching Data" : "No Data Found"}</td></tr>}
                </tbody>
            </Table>
            {
                isPagination &&
                <div className='table-pagination'>
                    <p className='mb-0'>
                        Showing 1-6 from 100
                    </p>
                    <Pagination className='mb-0'>
                        <Pagination.First>
                            <FaCaretLeft size={22} />
                        </Pagination.First>
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Last >
                            <FaCaretRight size={22} />
                        </Pagination.Last>
                    </Pagination>
                </div>
            }

            {/* gdddddddddd */}
        </div>
    )
}

export default CommonTable
