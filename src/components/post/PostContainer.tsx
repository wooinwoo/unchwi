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
  gap: 12% 0%;
  grid-template-columns: repeat(2, 1fr);
`;
