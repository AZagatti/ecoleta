import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background: ${({ theme }) => theme.colors.dropzone.background};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed ${({ theme }) => theme.colors.dropzone.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.dropzone.text};
  }

  p svg {
    color: ${({ theme }) => theme.colors.dropzone.primary};
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
