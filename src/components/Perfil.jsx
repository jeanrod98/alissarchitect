import React, { useState } from "react";
import styled from "styled-components";
import '../App.css'
import fotoPerfil from "../assets/perfil.jpg";
import imagen01 from "../assets/01.png";
import imagen02 from "../assets/02.png";
import imagen03 from "../assets/03.png";
import imagen04 from "../assets/04.png";
import imagen05 from "../assets/05.png";
import imagen06 from "../assets/06.png";
import imagen07 from "../assets/07.png";
import imagen08 from "../assets/08.png";
import imagen09 from "../assets/09.png";
import imagen10 from "../assets/10.png";

import textura from "../assets/2757.jpg";
import fondo from "../assets/fondo.jpg";
import Modal from "./Modal";

function Perfil() {
  let fecha = new Date();
  let year = fecha.getFullYear() - 2001;

  const [modal, setModal] = useState(false);
  const [source, setSource] = useState(null);

  const handleModal = (e) => {
    setModal(true);
    setSource(e.target.src);
  };
  //   console.log(modal);
  return (
    <>
      <Container>
        <ContenedorPerfil id="perfil">
          <div className="imagen-perfil">
            <img src={fotoPerfil} alt="Foto Perfil" />
          </div>
        </ContenedorPerfil>
        <InformacionPerfil>
          <div className="contenedor-informacion">
            <h2>Alisson Pamela Rodríguez Choez</h2>
            <h3>{year} años de edad</h3>
            <p>
              Estudiante de la facultad de arquitectura en la Universidad Laica
              Eloy Alfaro de Manabí.
            </p>
          </div>
        </InformacionPerfil>
      </Container>
      <InformacionFormacion>
        <div className="div-label" id="secundaria">
          <label htmlFor="">Secundaria</label>
        </div>
        <div className="contenedor-formacion-secundaria">
          <h4>Unidad Educativa Fiscal "Tarqui"</h4>
          <h5>Titulo de Bachiller</h5>
          <p>2018 - 2019</p>
        </div>
        <div className="div-label">
          <label htmlFor="">Tercer Nivel</label>
        </div>

        <div className="contenedor-formacion-universitaria">
          <h4>Universidad Laica Eloy Alfaro de Manabí</h4>
          <h5>Facultad de Arquitectura</h5>
          <p>
            Actualmente en <b>segundo</b> semestre
          </p>
        </div>
        <div className="div-label">
          <label htmlFor="" id="portafolio">
            Portafolio
          </label>
        </div>
        <Galeria>
          <GaleriaImagenes>
            <div className="div-img">
              <img src={imagen10} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen02} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen03} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen04} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen05} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen06} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen07} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen09} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen08} onClick={handleModal} loading="lazy" />
            </div>
            <div className="div-img">
              <img src={imagen01} onClick={handleModal} loading="lazy" />
            </div>
          </GaleriaImagenes>
        </Galeria>
      </InformacionFormacion>
      <Redes id="redes-sociales">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#24074E"
            fill-opacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,154.7C384,192,480,224,576,240C672,256,768,256,864,218.7C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="footer">
          <div className="instagram">
            <a href="https://www.instagram.com/alis.rc5/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <label htmlFor="">Instagram</label>
            </a>
          </div>

          <div className="facebook">
            <a
              href="https://www.facebook.com/alisson.rodriguez.182"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <label htmlFor="">Facebook</label>
            </a>
          </div>

          <div className="whatsapp">
            <a
              href=" https://api.whatsapp.com/send?phone=593963684319"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <label htmlFor="">Whatsapp</label>
            </a>
          </div>
        </div>
        <div className="derechos">
            <p>TODOS LOS DERECHOS RESERVADOS &copy; 2022</p>
            <p>Desarrollado por Jean Rodríguez - Dev</p>
        </div>
      </Redes>

      {modal && <Modal setModal={setModal} estado={modal} source={source} />}
    </>
  );
}

export default Perfil;
const Container = styled.div`
  background-image: url(${fondo});
  height: 30rem;
`;

const ContenedorPerfil = styled.div`
  // background: red;
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  .imagen-perfil {
    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const InformacionPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .contenedor-informacion {
    width: 50%;
    min-height: 100px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    text-align: center;

    h2 {
      font-family: "Oleo Script", cursive;
      // margin:0px;
    }
    h3 {
      // color: white;
      margin: 0px;
      font-family: "Jost", sans-serif;
    }

    p {
      margin: 0px;
      padding: 15px;
      font-style: italic;
    }
  }
  //! media
  @media screen and (max-width: 800px) {
    .contenedor-informacion {
      width: 80%;
    }
  }
`;

const InformacionFormacion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-bottom: 30px;
  //   background: #fff;
  margin-top: 12px;

  .contenedor-formacion-secundaria,
  .contenedor-formacion-universitaria {
    width: 50%;
    min-height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    // text-align: center;
    padding: 10px;

    h4,
    h5 {
      font-family: "Oleo Script", cursive;
      font-size: 16px;
    }

    p {
      font-style: italic;
      font-family: "Jost", sans-serif;
      font-size: 18px;
    }
  }
  .div-label {
    width: 100%;
    border-bottom: 1px solid #000;
    // margin-top: 20px;
    height: 28px;
  }

  label {
    background: rgba(0, 0, 0, 0.9);
    padding: 7px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.3);
    // border-radius: 6px;
  }
  //! media
  @media screen and (max-width: 800px) {
    .contenedor-formacion-secundaria,
    .contenedor-formacion-universitaria {
      width: 80%;
    }
  }
`;
const Galeria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   margin-top: 20px;
  background: rgba(0, 0, 0, 0);
  //   background-image: url(${textura});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position-x: -250px;
  //   background-position-y: bottom;
`;
const GaleriaImagenes = styled.div`
  // background: red;
  width: 80%;
  min-height: 100px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // background: blue;

  .div-img {
    // background: red;
    width: 40%;
    margin-top: 10px;
    padding: 10px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    &:hover {
      width: 40.5%;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: auto;
      // margin-top: 10px;
    }
  }
`;

const Redes = styled.div`
  position: relative;
  .footer {
    position: absolute;
    bottom: -80px;
    width: 100%;
    height: 100px;
    display: flex;
    background: #24074e;
    justify-content: center;

    .facebook,
    .instagram,
    .whatsapp {
      a {
        text-decoration: none;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          color: #ffff;
          width: 30px;
          height: 30px;
        }
        label {
          color: #ffff;
        }
      }
    }
  }

  .derechos{
      position: absolute;
      background: #000;
      width: 100%;
      height: 38px;
      bottom: -115px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p{
          margin: 0;
          color: #fff;
          font-size: 12px;

      }
  }
`;
