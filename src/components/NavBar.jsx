import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <>
    <ContenedorMenu>
        Aliss Architect
    </ContenedorMenu>
    <ContenedorNav>
        <div className="enlaces">

        <a href='#perfil'>Perfil</a>
        <a href='#secundaria'>Formación Profesional</a>
        <a href='#portafolio'>Portafolio</a>
        <a href='#redes-sociales'>Redes Sociales</a>
        </div>

    </ContenedorNav>
      </>
  )
}

export default NavBar

const ContenedorMenu = styled.div`


    width: 100%;
    height: 40px;
    background: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    // font-family: 'Water Brush', cursive;
    font-family: 'Oleo Script', cursive;
    font-size: 1.5rem;
    
    
    
`;

const ContenedorNav = styled.div`

    width: 100%;
    min-height: 30px;
    background: #2C0F56;
    margin-top: 10px;
    
    
    .enlaces{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
        min-height: 29px;
    // background: red;
    
        a{
           
            color: white;
            text-decoration: none;
            font-size: .8rem;
            font-family: 'Jost', sans-serif;
            
            &:hover{
            // text-shadow: 0px 4px 4px rgba(0, 0, 0, .5);
            font-size: .9rem;
            cursor: pointer;

        }

    


    @media screen and (max-width: 350px){
        flex-direction: column;
        a{
            padding: 5px;

            
        }
    }
            

        
    }
`;