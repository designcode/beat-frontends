import { Navigation } from '@beat-frontends/ui';
import styled from '@emotion/styled';
import logo from './beat.svg';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3rem 0;

  .logo, .navigation {
    display: flex;
  }
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={logo} alt="The Beat App" />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </StyledHeader>
  );
}

export default Header;
