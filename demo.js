import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Pagination } from 'antd';
// 第一个参数是页码(第几页，也可以叫做当前页数)，第二个参数是每页条数
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}
// defaultPageSize不写就是默认每页显示10条，你可以自己修改
// current当前页数
// pageSize每页条数
// pageSizeOptions指定每页可以显示多少条🐂b
// defaultCurrent默认的当前页数
// disabled是禁用分页而不是分页的显示没有了
// hideOnSinglePage只有一页是是否隐藏分页器
export default () => (
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} defaultPageSize={50} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>
);