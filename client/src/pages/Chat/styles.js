import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 20px;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
`;

export const Modal = styled.div`
  position: fixed;
  width: 90%;
  top: 40%;
  max-width: 400px;
  padding: 25px;
  background-color: #7819c1;
  text-align: center;
  color: #eee;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  & > span {
    color: #fff;
    font-size: 12px;
  }
  & > form {
    margin-top: 10px;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 50px;
    grid-template-rows: 1fr;
    gap: 5px;
    & > button {
      background-color: #fff;
      color: #7819c1;
    }
  }
`;

export const Header = styled.header`
  height: 40px;
  position: fixed;
  top: 0;
  color: #eee;
  z-index: 1000;
  padding: 10px;
  width: 100%;
  text-align: center;
  background-color: #7819c1;
  display: flex;
  justify-content: space-between;
  & > * {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #101019;
  position: fixed;
  ${props => (!props.blur ? "filter: blur(3px)" : "")}
`;

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 8px;
    background-color: #101019; /* or add it to the track */
  }
  &::-webkit-scrollbar-thumb {
    background: #7819c1;
    border-radius: 2px;
  }
`;

export const Message = styled.div`
  background: #2e2e2f;
  color: #eee;
  border-radius: 6px 6px 6px 0;
  width: fit-content;
  max-width: 99%;
  margin-top: 5px;
  padding: 6px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  word-wrap: break-word;
  & > strong {
    margin-bottom: 4px;
    font-size: 15px;
  }
`;

export const InputContainer = styled.form`
  background-color: #101019;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 1fr;
  gap: 10px;
  position: fixed;
  padding: 5px 0s;
`;

export const Input = styled.input`
  height: 35px;
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 15px 15px 0px 15px;
  margin: 10px 0;
  border: none;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 10px 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7819c1;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
