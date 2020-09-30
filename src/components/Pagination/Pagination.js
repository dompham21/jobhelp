import React from 'react'
import {  Pagination } from 'antd'

function PaginationList() {
    const itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
          }
          if (type === 'next') {
            return <a>Next</a>;
          }
          return originalElement;
    }
    return (
            <Pagination defaultCurrent={1} itemRender={itemRender} total={50}/>
    )
}

export default PaginationList;
