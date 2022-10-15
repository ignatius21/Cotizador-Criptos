import {useState} from 'react'

const useSelectMonedas = (label,opciones) => {
    const [state,setState] = useState('');
    const SelectMonedas = () =>(
    <>
        <label className='text-white fw-bold text-uppercase'>{label}</label>
        <select className='form-control mt-2 mb-5 container fw-bold' value={state} onChange={e => setState(e.target.value)}>
            <option value="" className='text-center'> -- Seleccione -- </option>
            {opciones.map(opcion =>(
               <option
                className='text-center fw-bold'
                key={opcion.id}
                value={opcion.id}
               >{opcion.nombre}</option> 
            ))}
        </select>
    </>
  )
  return [state,SelectMonedas]
}

export default useSelectMonedas