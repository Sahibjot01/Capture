import styled from "styled-components";
//use this style to basically define reusabe style for components
export const StyledAboutDiv = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #f5f5f5;
`;

export const StyledDescriptionDiv = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImageDiv = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const StyledHideDiv = styled.div`
  overflow-y: hidden;
`;
