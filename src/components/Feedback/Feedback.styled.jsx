import styled from 'styled-components';

// export const FeedbackBtn = styled.button``

export const FeedbackBtn = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;

    background-color: white;
    color: #250F99;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

    text-transform: capitalize;
    font-size: 25px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #4b98f5;
    color: #eee;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
  }
`;