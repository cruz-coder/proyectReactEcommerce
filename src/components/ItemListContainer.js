import React from 'react'
import bgImg from '../assets/img/ban.jpg'



const ItemListContainer = () => {

    function Welcome(props) {
        return <h2>Nos encanta tenerte aqui, {props.name}</h2>;
    }

    return (
        <div>
            <div class="hero min-h-screen bg-img" style={estilos.bg} >
            <div class="hero-overlay bg-opacity-50" ></div>
                    <div class="hero-content text-center text-primary-content">
                    <div class="max-w-md">
                        <h1>Bienvenido a Tuwi </h1>
                        <Welcome name="Pedro Damian"/>
                    </div>
                </div>
            </div>
        </div>
)
}
const estilos = {
    bg: {
        backgroundImage: `url(${bgImg})`,
        width: '100%',        
    }
}


export default ItemListContainer