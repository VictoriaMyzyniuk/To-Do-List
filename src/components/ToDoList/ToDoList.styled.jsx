import styled from '@emotion/styled';

export const ListHeader = styled.div`
  display: flex;
  width: 1000px;
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const ItemListHeader = styled.div`
  margin-left: 200px;
  font-weight: bold;
  :first-of-type {
    margin-left: 0;
  }
`;

export const ListEl = styled.ul`
  width: 822px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;

export const ItemEl = styled.li`
  display: flex;
`;
