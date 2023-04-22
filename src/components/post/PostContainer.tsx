import styled from "styled-components";
import Post from "./Post";

const PostContainer = () => {
  return (
    <Container>
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default PostContainer;

const Container = styled.div`
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
