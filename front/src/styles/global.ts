import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,*:before,*:after{
    box-sizing:inherit;
  }
  html{
  font-size: 62.5%;
box-sizing: inherit;/* codigo para que no crezca el box cuando le agrego el border y no me crezca el elemento */
height: 100%;
}
  body{
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'PT Sans', sans-serif; 
  }
  h1,h2,h3{
    margin: 0 0 2rem 0;
    line-height: 1.5;
}
  h1, h2{
font-family: 'Roboto', sans-serif;
font-weight:700;
}
h3{ 
    font-family: 'PT Sans', sans-serif;
}
  ul{
      list-style: none;
      margin: 0;
      padding: 0;
  }
  a{
      text-decoration: none;
  }
`
