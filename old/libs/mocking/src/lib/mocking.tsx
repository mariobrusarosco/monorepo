import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MockingProps {}

const StyledMocking = styled.div`
  color: pink;
`;

export function Mocking(props: MockingProps) {
  return (
    <StyledMocking>
      <h1>Welcome to Mocking!</h1>
    </StyledMocking>
  );
}

export default Mocking;
