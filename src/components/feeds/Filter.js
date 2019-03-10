import React from 'react';
import Button from 'antd/es/button';
import styled from 'styled-components';


const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = ({ onClick }) => (
  <FilterBox>
    <Button
      onClick={onClick}
      id="friends"
      name="filter"
      type="primary"
      icon="team"
    >
      Friends
    </Button>
    <span>&nbsp;</span>
    <Button
      onClick={onClick}
      id="public"
      name="filter"
      type="primary"
      icon="global"
    >
      Public
    </Button>
  </FilterBox>
);

export default Filter;