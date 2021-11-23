import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline;
      margin: 0 0 0 1rem;

      a {
        text-decoration: none;
      }
    }
  }
`;

export function Navigation(props: NavigationProps) {
  return (
    <StyledNavigation>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rides">My Rides</Link>
          </li>
        </ul>
      </div>

      {/* END: routes */}
    </StyledNavigation>
  );
}

export default Navigation;
