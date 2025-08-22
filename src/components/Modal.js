import React from 'react';
import './Modal.css'; 
import tenisDeMesaImage from '../images/tenisdemesatrenque.com.ar_.png';
import grupoTerraImage from '../images/grupoterralauquen.com.ar_.png';
import tenisDeMesaImageRank from '../images/tenisDeMesaImageRank.png';
import megaMayoristaImage from '../images/megamayorista.png';
import chichicImage from '../images/chichicImage.png';
import protorneoImage from '../images/protorneo.png';
import gangafanpage from '../images/gangafan-page.png';
import fapcdmsImage from '../images/fapcdms-logo.png';

const proyectos = [
    {
        img: gangafanpage,
        title: "Gangafan",
        desc: "Desarrollado en Wordpress.",
        link: "https://gangafan.com"
    },
    {
        img: tenisDeMesaImage,
        title: "Tenis de Mesa Trenque",
        desc: "Desarrollado en React.",
        link: "https://tenisdemesatrenque.com.ar/"
    },
    {
        img: grupoTerraImage,
        title: "Grupo Terra Lauquen",
        desc: "Desarrollado en WordPress.",
        link: "https://grupoterralauquen.com.ar/"
    },
    {
        img: tenisDeMesaImageRank,
        title: "Ranking TDM Trenque",
        desc: "Sistema de Ranking PHP, MySQL.",
        link: "https://trenquetdmranking.com.ar"
    },
    {
        img: megaMayoristaImage,
        title: "MegaMayorista",
        desc: "Tienda en WooCommerce desarrollada con Elementor.",
        link: "https://megamayorista.com"
    },
    {
        img: chichicImage,
        title: "Chichic",
        desc: "Sitio Informativo Wordpress.",
        link: "https://chichicwinerelax.com"
    },
    {
        img: protorneoImage,
        title: "Protorneo",
        desc: "Desarrollado en HTML, CSS, JS.",
        link: "https://protorneo.com"
    },
    {
        img: fapcdmsImage,
        title: "FAP CDMS",
        desc: "Sistema de credenciales digitales con QR para pilotos del automovilismo",
        link: "https://fapcdms.com"
    }
];

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Últimos Proyectos</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    {proyectos.map((proyecto, index) => (
                        <div className="proyecto" key={index}>
                            <img src={proyecto.img} alt={proyecto.title} loading="lazy" />
                            <h3>{proyecto.title}</h3>
                            <p>{proyecto.desc}</p>
                            <a className="btn" href={proyecto.link} target="_blank" rel="noopener noreferrer">
                                Ver Proyecto
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;