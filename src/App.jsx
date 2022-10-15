import { useState,useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'


function App() {

  const [monedas,setMonedas] = useState({});
  const [resultado,setResultado] = useState({});
  const [cargando,setCargando] = useState(false);

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async() =>{
        setCargando(true)
        setResultado({})
        const {moneda,criptomoneda} = monedas;
        const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      cotizarCripto();
    }

  },[monedas])

  return (
    <>
      <div className='container-fluid text-center mt-5'>
        <Header/>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <img src={ImagenCripto} alt="imagen-cripto" className='img-fluid mt-5'/>
          </div>
          <div className="col m-5 justify-content-center align-items-center">
            <Formulario
            setMonedas={setMonedas}/>
             {/* si el resultado contiene alguna de las propiedades,entonces se va a mostrar el componente */}
             {cargando && <Spinner/>}
            {resultado.PRICE && <Resultado resultado={resultado}/>}
          </div>
        </div>
      </div>
      
    </> 
  )
}

export default App
