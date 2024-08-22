import styled from "styled-components";

const HelloWorld = styled.div`
  font-size: 30px;
  color: #ed4848;
  text-decoration: line-through;
  &:hover{
    color:blue;
  }
`;

const Wrapper = styled.main`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
`;

const Desc = styled.p`
  font-size: 25px;
  color: bllue;
`;

export default function Styled() {
  return (
  <>
    <Wrapper>
      <HelloWorld>Hello, Styled Component!</HelloWorld>
      <Desc>style</Desc>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Wrapper>
  </>
  )
}