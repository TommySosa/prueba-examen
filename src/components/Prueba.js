import { useEffect, useState } from "react"

function Prueba(props){
    // Recibe los valores desde las props y los guarda en una constante a y otra en b
    const {a , b} = props
    // Suma los valores y los guarda en una variable
    let resultado = a + b

    const [result, setResult] = useState()
    const [contador, setContador] = useState(0)

    const resta = (a,b) => {
        return a - b
    }

    const handleResta = () => {
        setResult(resta(a,b))
    }

    const handleContador = () => {
        setContador(contador + 1)
    }

    //cuando inicia la aplicacion
   
    useEffect(() => {
        document.title = 'Clicks : ' + contador
    }, [contador])
    useEffect(() => {
        document.title = 'Titulo al iniciar'
    }, [])  
    
    return(
        <div>
            <h1>Prueba</h1>
            {/* Muestra el resultado en lenguaje JSX entre {} el valor de la variable resultado */}
            <h2>{resultado}</h2>
            <button onClick={handleResta}>Restar</button>
            <h3>{result}</h3>
            <button onClick={handleContador}>Click aqui</button>
            <h4>{contador}</h4>
            {/* Operador ternario 
            condicion ? muestra si es verdadero : muestra si es falso */}
            {contador === 5 ? <h1>Contador en 5</h1> : <h1>El contador no es 5</h1>} 
            <h1>Nuevo titulo</h1>
        </div>
    )
}

export default Prueba