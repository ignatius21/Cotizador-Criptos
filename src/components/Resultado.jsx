import React from 'react'

const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado;
  return (
    <div>
          <h1 className='text-uppercase text-white fw-bold mt-4'>Cotización</h1>
          <img className='imagenCripto' src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen-cripto" />
          <p className='text-white'>El precio es de: <span className='text-info fw-bold'>{PRICE}</span> </p>
          <p className='text-white'>El valor mas alto fue de: <span className='text-info fw-bold'>{HIGHDAY}</span> </p>
          <p className='text-white'>El valor mas bajo fue de: <span className='text-info fw-bold'>{LOWDAY}</span> </p>
          <p className='text-white'>La variacion porcentual fue de: <span className='text-info fw-bold'>{CHANGEPCT24HOUR}</span> </p>
          <p className='text-white'>Ultima actualizacion: <span className='text-info fw-bold'>{LASTUPDATE}</span> </p>
    </div>
  )
}

export default Resultado