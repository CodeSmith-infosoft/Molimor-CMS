import avatar from '@/assets/image/avatar-img.png'
import { JSX, ReactNode } from 'react';
import { Table } from 'react-bootstrap'
import { HiDotsVertical } from 'react-icons/hi'

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
        <div>
            <Table>
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
        </div>
    )
}

export default CommonTable
