import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPage from '../components/ErrorPage';
import "./Erreur.scss";

function Erreur() { 
    return (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    );
  }


export default Erreur;