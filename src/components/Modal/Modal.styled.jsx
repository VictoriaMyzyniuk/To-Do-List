import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow-y: scroll;
`;

export const ModalEl = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 600px;
  height: 400px;
  padding: 40px;
  overflow-y: scroll;
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalDescriptionTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalDescription = styled.p`
  margin-bottom: 20px;
`;

export const ModalStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonModal = styled.button`
  width: 60px;
  max-height: 30px;
`;
