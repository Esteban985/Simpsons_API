import { createContext } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../utils/apiClient";

const SimpsonContext = createContext();

const SimpsonProvider = ({ children }) => {
    const navigate = useNavigate();

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

    return (
        <SimpsonContext.Provider value={{
            sabeUser,
            getUser,
            verificarUser,
            traerPersonajes,
        }}>
            {children}
        </SimpsonContext.Provider>
    );
}

export { SimpsonProvider, SimpsonContext };