import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 4rem 4.5rem;
  border-bottom: 1px solid var(--color-grey-300);
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
