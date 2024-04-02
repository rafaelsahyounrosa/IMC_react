import { useState } from "react"

const Formulario = (props) => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState('');
    const [exibirResultado, setExibirResultado] = useState(false);


    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
            setExibirResultado(false);
        })
    }

    const calcularIMC = () => {
        const alturaM = altura / 100;
        return peso / (alturaM ** 2); 
    }

    const renderizaResultado = () => {
        const resultado = calcularIMC();

        if(!nome || peso === 0 || altura === 0){
            return <p>Vamos fazer o seu calculo! Insira os dados acima!</p>
        }

        if (resultado < 16) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Magreza Grave</b></p>
            )
        } 
        if (resultado >= 16 && resultado <= 16.9) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Magreza Moderada</b></p>
            )
        } 
        if (resultado >= 17 && resultado <= 18.4) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Magreza Leve</b></p>
            )
        } 
        if (resultado >= 18.5 && resultado <= 24.9) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Situação Ideal</b></p>
            )
        } 
        if (resultado >= 25 && resultado <= 29.9) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Sobrepeso</b></p>
            )
        } 
        if (resultado >= 30 && resultado <= 34.9) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Obesidade Grau 1</b></p>
            )
        }
        if (resultado >= 35 && resultado <= 39.9) {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Obesidade Severa</b></p>
            )
        }else {
            return (
                <p>Olá {nome}, o seu resultado é {resultado.toFixed(2)} e você está em <b>Obesidade Mórbita</b></p>
            )
        }
    } 

    return (
        <>
            <form>
                <input type="text" placeholder="Seu nome" onChange={alteraNome} />
                <input type="number" placeholder="Peso (Kg)" onChange={({ target }) => setPeso(parseInt(target.value))} />
                <input type="number" placeholder="Altura (cm)" onChange={evento => setAltura(parseInt(evento.target.value))} />
                {renderizaResultado()}
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Abaixo de 16</td>
                        <td>Magreza Grave</td>
                    </tr>
                    <tr>
                        <td> 16 a 16.9</td>
                        <td>Magreza Moderada</td>
                    </tr>
                    <tr>
                        <td> 17 a 18.4</td>
                        <td>Magreza Leve</td>
                    </tr>
                    <tr>
                        <td> 18.5 a 24.9</td>
                        <td>Situação Ideal</td>
                    </tr>
                    <tr>
                        <td> 25 a 29.9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td> 30 a 34.9</td>
                        <td>Obesidade Grau 1</td>
                    </tr>
                    <tr>
                        <td> 35 a 39.9</td>
                        <td>Obesidade Severa</td>
                    </tr>
                    <tr>
                        <td> Acima de 40</td>
                        <td>Obesidade Mórbita</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Formulario