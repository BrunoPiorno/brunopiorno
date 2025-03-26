import React from 'react';
import './Modal.css'; 
import tenisDeMesaImage from '../images/tenisdemesatrenque.com.ar_.png';
import grupoTerraImage from '../images/grupoterralauquen.com.ar_.png';
import tenisDeMesaImageRank from '../images/tenisDeMesaImageRank.png';
import megaMayoristaImage from '../images/megamayorista.png';


const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Últimos Proyectos</h2>
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-body">
                    <div className="proyecto">
                        <img src={tenisDeMesaImage} alt="Tenis de Mesa Trenque" />
                        <h3>Tenis de Mesa Trenque</h3>
                        <p>Desarrollado en React.</p>
                        <a className="btn" href="https://tenisdemesatrenque.com.ar/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                    <div className="proyecto">
                        <img src={grupoTerraImage} alt="Grupo Terra Lauquen" />
                        <h3>Grupo Terra Lauquen</h3>
                        <p>Desarrollado en WordPress.</p>
                        <a className="btn" href="https://grupoterralauquen.com.ar/" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                    <div className="proyecto">
                        <img src={tenisDeMesaImageRank} alt="Tenis de Mesa Trenque" />
                        <h3>Ranking Tenis de Mesa Trenque</h3>
                        <p>Sistema de Ranking PHP,MYSQL.</p>
                        <a className="btn" href="https://trenquetdmranking.com.ar" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                    <div className="proyecto">
                        <img src={megaMayoristaImage} alt="MegaMayorista" />
                        <h3>MegaMayorista</h3>
                        <p>Tienda en WooCommerce desarrollada con Elementor.</p>
                        <a className="btn" href="https://megamayorista.com" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
