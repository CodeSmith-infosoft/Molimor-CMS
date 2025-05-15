import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { FaCaretRight, FaPlus } from 'react-icons/fa'

type PageTitleType = {
    title: string;
    subTitle?: string;
}

const PageTitle = ({ title, subTitle }: PageTitleType) => {
    return (
        <section className='page-title'>
            <div className='title'>
                <h2>{title}</h2>
                <div className='sub-title'>
                    <span className='sub-title-1'>Dashboard</span>
                    <FaCaretRight />
                    <span>{title}</span>
                </div>
            </div>
            <div className='title-btn'>
                <button className='btn-1'><BsDownload /> Export</button>
                <button><FaPlus /> Add products</button>
            </div>
        </section>
    )
}

export default PageTitle