import styled from '@emotion/styled';
import logo from './beat.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <img src={logo} alt="The Beat App" />
    </StyledHeader>
  );
}

export default Header;
