import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  overflow: hidden;

  margin: 0 auto;

  header {
    padding-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.title};
      font-weight: bold;
      text-decoration: none;

      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
        color: ${({ theme }) => theme.colors.green};
      }
    }

    button {
      border: 0;
      outline: 0;
      background: transparent;
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors.theme};
        width: 30px;
        height: 30px;
      }
    }
  }

  .form-wrapper {
    padding: 84px 0;
  }
`;

export const CompleteScreen = styled.div`
  position: absolute;
  background-color: #0e0a14;
  opacity: 0.95;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  body:not(&) { overflow: hidden; }

  svg {
    width: 64px;
    height: 64px;
    color: ${({ theme }) => theme.colors.green};
  }

  h3 {
    margin-top: 32px;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #f0f0f5;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 64px;
  max-width: 730px;
  background: ${({ theme }) => theme.colors.invertText};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
  }

  fieldset {
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 24px;
    }

    span {
      font-size: 14px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .field-group {
    flex: 1;
    display: flex;

    input + input {
      margin-left: 24px;
    }
  }

  .field {
    flex: 1;

    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    input[type="text"],
    input[type="email"],
    input[type="number"] {
      flex: 1;
      background: ${({ theme }) => theme.colors.cardBackground};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text};
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      flex: 1;
      background: ${({ theme }) => theme.colors.cardBackground};
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.text};
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }

    label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    &:disabled {
      cursor: not-allowed;
    }

    & + .field {
      margin-left: 24px;
    }
  }

  .field-check {
    flex-direction: row;
    align-items: center;

    input[type="checkbox"] {
      background: ${({ theme }) => theme.colors.cardBackground};
    }

    label {
      margin: 0 0 0 8px;
    }
  }

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  button {
    width: 260px;
    height: 56px;
    background: ${({ theme }) => theme.colors.green};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.invertText};
    font-weight: bold;
    font-size: 16px;
    border: 0;
    align-self: flex-end;
    margin-top: 40px;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const ItemsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;

  li {
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 2px solid ${({ theme }) => theme.colors.cardBackground};
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    &.selected {
      background: ${({ theme }) => theme.colors.background};
      border: 2px solid ${({ theme }) => theme.colors.green};
    }

    span {
      flex: 1;
      margin-top: 12px;

      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.title};
    }
  }
`;
