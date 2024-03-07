import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
//import AbogadoItem from './AbogadoItem';

function AbogadosList() {
  const { getAbogados,Abogados } = useAuth();
  
  useEffect(()=>{
    getAbogados()
  },[])

  const styles = {
    abogadosList: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    abogadoContainer: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    },
    abogadoItem: {
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      color: '#333',
    },
    paragraph: {
      margin: '5px 0',
      color: '#666',
    },
  };
   

  return (
    <div style={styles.abogadosList}>
    <h1 style={styles.heading}>Listado de Abogados</h1>
    <div style={styles.abogadoContainer}>
      {Abogados.map(abogado => (
        <div style={styles.abogadoItem} key={abogado._id}>
          <h2 style={styles.heading}>{abogado.name}</h2>
          <p style={styles.paragraph}>Email: {abogado.email}</p>
          <p style={styles.paragraph}>Teléfono: {abogado.phone}</p>
          <p style={styles.paragraph}>Categoría: {abogado.category}</p>
        </div>
      ))}
    </div>
  </div>
);
};
export default AbogadosList;
