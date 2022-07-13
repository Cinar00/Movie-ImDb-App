import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path} alt={title} />
                <div className="card-body">    
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose} style={{background: "rgba(0,0,0,0.4)"}}>
                        <Modal.Header closeButton style={{background:"#f1ecec"}}>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{background:"#f1ecec"}}>
                            <div style={{display:"flex", flexDirection:"row"}}>
                                <img className="card-img-top" style={{width:"12rem"}} src={API_IMG+poster_path} alt={title} />
                                <div>
                                    <h3 style={{paddingLeft:"2rem"}} className="mb-5">{title}</h3>
                                    <h4 style={{paddingLeft:"2rem"}} className="mb-5">ImDb: {vote_average}</h4>
                                    <h5 style={{paddingLeft:"2rem"}} className="">Release Date <br /> {release_date}</h5>
                                </div>
                            </div>
                            <br></br>
                            <h6>Overwiew</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer style={{background:"#f1ecec"}}>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox