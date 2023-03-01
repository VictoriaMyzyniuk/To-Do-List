import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  width: 1000px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  border-bottom: 1px solid black;
`;

export const CardItemId = styled.div`
  margin-right: 150px;
  overflow: hidden;
`;

export const CardItemTitle = styled.div`
  width: 180px;
  height: 20px;
  margin-right: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardItemDesc = styled.div`
  width: 180px;
  height: 20px;
  margin-right: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
