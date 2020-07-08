import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: none;
  border: none;
  outline: 0;
  transition: transform 0.5s;
  height: 50px;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .line-2 {
    margin: 8px 0;
  }

  input:checked {
    padding: 25px 0;
    transform: rotate(180deg);

    ~ .line-1 {
      transform: rotate(45deg);
    }

    ~ .line-2 {
      margin: -3px 0;
      opacity: 0;
    }

    ~ .line-3 {
      transform: rotate(-45deg);
    }
  }

  span {
    border-top: 3px solid #000;
    display: block;
    transition: margin 0.5s, transform 0.5s;
    width: 40px;
  }
`;

interface MenuButtonProps {
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => (
  <Button role="button" onClick={onClick}>
    <input type="checkbox" />
    <span className="line-1"></span>
    <span className="line-2"></span>
    <span className="line-3"></span>
  </Button>
);

export default MenuButton;
