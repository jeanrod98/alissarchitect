import React from "react";
import styled from "styled-components";

function Modal({ source, setModal, estado }) {
  console.log(source);
  return (
    <ContenedorModal>
        <Ventana>
            <div className="header">

                <div className="close" onClick={() => setModal(!estado)}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                    />
                    </svg>
                </div>
            </div>
                <img src={source} alt="" />

        </Ventana>
    </ContenedorModal>
  );
}

export default Modal;
const ContenedorModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ventana = styled.div`
    // width: 90%;
    min-height: 100px;
    background: #fff;
    position: relative;
    
    .header{
        position: absolute;
        display: flex;
        justify-content: flex-end;
        // padding: 20px;
        right: 6px;
        top: 6px;

        svg{
            width: 30px;
            height: 30px;
            // background: rgba(255, 255, 255, 0.8);
            color: #2D036B;
            cursor: pointer;
        }
    }

    img{
        width: auto;
        height: 80vh; 
    }
    @media screen and (max-width: 800px){
        img{
            width: 90vw;
            height: auto; 
        }
    }
`;
