import styled from '@emotion/styled';

export interface CardProps {
  children?: React.ReactNode,
}

const StyledCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin: 0 0 2rem 0;
  border-radius: 0.5rem;
`;

export function Card(props: CardProps) {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

export default Card;
