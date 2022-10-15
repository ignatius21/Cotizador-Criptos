import {useEffect, useState} from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import monedas from '../data/monedas'
import Error from './Error'

const Formulario = ({setMonedas}) => {
    const [criptos,setCriptos] = useState([]);
    const [error,setError] = useState(false);
    
    const [moneda,SelectMonedas] = useSelectMonedas('Elige tu Moneda',monedas);
    const [criptomoneda,SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda',criptos);

    useEffect(()=>{
        const consultarAPI = async()=>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
                         const respuesta = await fetch(url)
                         const resultado = await respuesta.json()
                         const arrayCriptos = resultado.Data.map(cripto =>{
                             const objeto = {
                                id: cripto.CoinInfo.Name,
                                nombre: cripto.CoinInfo.FullName
                             }
                             return objeto;
                         })

                         setCriptos(arrayCriptos)                
        }
        consultarAPI()
    },[])


    const handleSubmit = (e) =>{
      e.preventDefault();

      if([moneda,criptomoneda].includes('')){
        setError(true);

        setTimeout(() => {
          setError(false)
        }, 2000);

        return
      }

      setError(false)
      setMonedas({
        moneda,
        criptomoneda
      })
    }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <input type="submit" value="Cotizar" className='btn btn-primary fw-bold text-uppercase' />
      </form>

      {error && <Error>Todos los campos son obligatorios!!!</Error>}
    </>
    
      
  )
}

export default Formulario