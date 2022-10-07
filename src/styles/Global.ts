import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #ff577f;
    --color-primary-Focus: #ff427f;
    --color-primary-Negative: #59323f;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343b41;
    --gray-1:#868e96;
    --gray-0:#f8f9fa;

    --color-success: #3fe864;
    --color-warning: #Ffcd07;
    --color-error: #e83f5b;
    --color-information: #155bcb;
    --color-primary-Disable:#59323F;
    --font-family: 'Inter', sans-serif;

   
  }

*{
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
}
body{
 overflow-x: hidden;
 background-color: #121214;
}
body::-webkit-scrollbar {
    border: none;
    width: 8px;
}
  body::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 5px;
}
button{
  cursor: pointer;
}
button:hover{
  filter: contrast(0.8);
}
a{
  cursor: pointer;
}
a:hover{
  filter: contrast(0.8);
}
ul,li{
 list-style: none;
 
}

`;
