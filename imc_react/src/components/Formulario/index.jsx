import { useState } from "react"

const Formulario = (props) => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [nome, setNome] = useState('');


    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const calcularIMC = () => {
        const alturaM = altura / 100;
        return peso / (alturaM ** 2); 
    }

    const renderizaResultado = () => {
        const resultado = calcularIMC();
        console.log(resultado)
        console.log(peso)
        console.log(altura)

        if (resultado < 16) {
            return (
                <p>Olá {nome}, você está em <b>Magreza Grave</b></p>
            )
        } 
        if (resultado >= 16 && resultado <= 16.9) {
            return (
                <p>Olá {nome}, você está em <b>Magreza Moderada</b></p>
            )
        } 
        if (resultado >= 17 && resultado <= 18.4) {
            return (
                <p>Olá {nome}, você está em <b>Magreza Leve</b></p>
            )
        } 
        if (resultado >= 18.5 && resultado <= 24.9) {
            return (
                <p>Olá {nome}, você está em <b>Situação Ideal</b></p>
            )
        } 
        if (resultado >= 25 && resultado <= 29.9) {
            return (
                <p>Olá {nome}, você está em <b>Sobrepeso</b></p>
            )
        } 
        if (resultado >= 30 && resultado <= 34.9) {
            return (
                <p>Olá {nome}, você está em <b>Obesidade Grau 1</b></p>
            )
        }
        if (resultado >= 35 && resultado <= 39.9) {
            return (
                <p>Olá {nome}, você está em <b>Obesidade Severa</b></p>
            )
        }else {
            return (
                <p>Olá {nome}, você está em <b>Obesidade Mórbita</b></p>
            )
        }
    } 

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Peso (Kg)" onChange={({ target }) => setPeso(parseInt(target.value))} />
            <input type="number" placeholder="Altura (cm)" onChange={evento => setAltura(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario