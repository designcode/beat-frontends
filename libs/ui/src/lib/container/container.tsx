import styled from '@emotion/styled';

export interface ContainerProps {
  children: React.ReactNode,
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;

  .container {
    width: 50rem;
    text-align: center;
    margin: 5rem;
  }
`;

export function Container(props: ContainerProps) {
  return (
    <StyledContainer>
        <div className="container">{props.children}</div>
    </StyledContainer>
  );
}

export default Container;
