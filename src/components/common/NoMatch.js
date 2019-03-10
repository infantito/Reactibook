import React from 'react';
import Empty from 'antd/es/empty';

const NoMatch = ({ text = '404' }) => <Empty>{text}</Empty>;

export default NoMatch;