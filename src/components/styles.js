import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
`;

export const Card = styled.div`
  display: grid;
  background-color: var(--card-bg);
  border-radius: 9px;
  border: 1px solid var(--card-bdr);
  box-shadow: 0 0 30px var(--card-shadow);
  overflow: hidden;
  line-height: 1.5;
  &:hover .post-link {
    color: var(--primary-color);
  }
  > a img {
    display: block;
  }
  > header {
    padding: 24px;
  }
  > h2:first-child {
    margin: 0 0 0.5rem 0;
  }
  .post-title {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .post-meta {
    font-weight: 100;
    margin-bottom: 0;
  }
  .post-link {
    color: var(--text-color);
    text-decoration: none;
  }
`;




export const Content = styled.div`
  padding: 1rem 0;
`;