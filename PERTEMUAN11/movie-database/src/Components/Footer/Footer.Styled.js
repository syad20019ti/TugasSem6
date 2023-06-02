import styled from "styled-components";

const Container = styled.div`
    background-color: #abc4ff;
    color: #fff;
    padding: 1rem;
    text-align: center; 
`;

const StyledFooter = styled.footer`
  h2{
    margin-bottom: 1rem;
  }

  p{
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
  }
`

export default StyledFooter;
export { Container };