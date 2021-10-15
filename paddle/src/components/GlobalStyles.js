import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
  font-size: 11px;
  color: #4F5665;
  &::-webkit-scrollbar{
            width: .7rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color:  #BA55D3;
        }
    &::-webkit-scrollbar-track {
    background: white;
        }
}
body{
    font-family: 'lato', sans-serif;
    
}
a{
  text-decoration: none;
  font-size: 1.1rem;
  color: #4F5665;
}
ul {
  list-style: none;
}
  
`;

export default GlobalStyles;
