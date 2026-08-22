import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../utils/apiClient";
import { sileo } from "sileo";

const SimpsonContext = createContext();

const SimpsonProvider = ({ children }) => {
    const navigate = useNavigate();
    const [pagina, setPagina] = useState(1)
    const [favoritos, setFavoritos] = useState([])

    const sabeUser = (form) => {
        localStorage.setItem('userInfo', JSON.stringify(form))
        navigate('/home')
    }

    const getUser = () => {
        let user = JSON.parse(localStorage.getItem('userInfo'))
        return user;
    }

    const verificarUser = () => {
        let user = getUser()

        if (user) {
            navigate('/home')
        } else {
            navigate('/')
        }
    }

    const traerPersonajes = async (pagina) => {
        let { data } = await apiClient.get(`/characters?page=${pagina}`)

        return data.results;
    }

    const detallesPersonaje = async (id) => {
        let { data } = await apiClient.get(`/characters/${id}`)
        return data;
    }

    const mostrarAlerta = (message, tipe) => {
        if (tipe == 'green') {
            sileo.success({
                title: message,
                duration: 2000,
            })
        } else if (tipe == 'red') {
            sileo.error({
                title: message,
                duration: 2000,
            })
        }
    }

    const agregarFavorito = async (id) => {
        let { data } = await apiClient.get(`characters/${id}`)
        let esta = favoritos.some((item) => item.id == data.id)
        if (esta) {
            mostrarAlerta('Este personaje ya se encuentra en los favoritos', 'red')
        } else {
            mostrarAlerta('Personaje agregado correctamente', 'green')
            setFavoritos((prev) => ([
                ...prev,
                data
            ]))
        }
    }

    const eliminarFavorito = (id) => {
        let temp = favoritos.filter((item) => item.id != id)
        setFavoritos(temp)
        mostrarAlerta('Eliminado de favoritos', 'green')
    }

    return (
        <SimpsonContext.Provider value={{
            sabeUser,
            getUser,
            verificarUser,
            traerPersonajes,
            detallesPersonaje,
            pagina,
            setPagina,
            agregarFavorito,
            favoritos,
            eliminarFavorito
        }}>
            {children}
        </SimpsonContext.Provider>
    );
}

export { SimpsonProvider, SimpsonContext };