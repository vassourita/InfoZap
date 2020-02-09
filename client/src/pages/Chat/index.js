import React, { useState, useEffect, useRef } from "react";
import { MdSend } from "react-icons/md";

import io from "socket.io-client";

import { ModalContainer, Modal, Header, Container, ChatBox, Message, InputContainer, Input, Button } from "./styles";

const socket = io.connect(document.URL);

export default function Chat() {
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [hasUsername, setHasUsername] = useState(false);
  const [online, setOnline] = useState(0);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(() => {
    scrollToBottom();
    socket.on("bootstrap", data => {
      setMessages(data);
    });
    socket.on("newMessage", data => {
      setMessages([...messages, data]);
      scrollToBottom();
    });
    socket.on("online", data => setOnline(data));
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (hasUsername) {
      const data = {
        author: username,
        content: message,
      };
      setMessages([...messages, data]);
      socket.emit("sendMessage", data);
      setMessage("");
      scrollToBottom();
    }
  }
  function handleSetUsername(e) {
    e.preventDefault();
    if (username !== "") setHasUsername(true);
    else setUsernameError(true);
  }

  return (
    <>
      <Header>
        <p>
          <strong>Infozap</strong> por Vinicius Vassão
        </p>
        <p>Online agora: {online}</p>
      </Header>
      <Container blur={hasUsername}>
        <ChatBox>
          {messages.map((msg, i) => (
            <Message key={i}>
              <strong>{msg.author}</strong>
              <p>{msg.content}</p>
            </Message>
          ))}
          <div ref={messagesEndRef} />
        </ChatBox>
        <InputContainer onSubmit={handleSubmit}>
          <Input
            placeholder="Digite sua mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
            color="#ffffff"
          />
          <Button type="submit">
            <MdSend />
          </Button>
        </InputContainer>
      </Container>
      {!hasUsername && (
        <ModalContainer>
          <Modal>
            <p>Insira um nome de usuário para continuar</p>
            <form onSubmit={handleSetUsername}>
              <Input placeholder="Digite seu nome" value={username} onChange={e => setUsername(e.target.value)} />
              <Button type="submit">
                <MdSend />
              </Button>
            </form>
            {usernameError && <span>Não pode ser vazio!</span>}
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}
