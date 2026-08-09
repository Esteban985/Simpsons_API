import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { useContext, useEffect, useState } from 'react';
import { SimpsonContext } from '../../context/simpsonContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const {
        sabeUser,
        getUser,
    } = useContext(SimpsonContext)

    const navigate = useNavigate()

    const [form, setForm] = useState({
        userName: '',
        password: ''
    })

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        sabeUser(form)
    }

    const verificar = () => {
        let user = getUser();

        if (user) {
            navigate('/home')
        }
    }

    useEffect(() => {
        verificar()
    }, [])

    return (
        <main className="simpson-login-page">
            <section className="simpson-card p-4 p-md-5">
                <div className="simpson-brand">
                    <div className="simpson-logo mx-auto">
                        <span>🍩</span>
                    </div>
                    <h1 className="simpson-title">BIENVENIDO A SPRINGFIELD</h1>
                    <p className="simpson-subtitle">
                        Accede y disfruta el mundo de Los Simpson con estilo amarillo.
                    </p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="mb-3 form-floating">
                        <input
                            type="text"
                            className="form-control"
                            name='userName'
                            id="user"
                            placeholder="Tu Usuario"
                            value={form.userName}
                            onChange={onChange}
                        />
                        <label htmlFor="user">Correo electrónico</label>
                    </div>

                    <div className="mb-4 form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name='password'
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={onChange}
                        />
                        <label htmlFor="password">Contraseña</label>
                    </div>

                    <button type="submit" className="btn btn-warning w-100 py-3">
                        INGRESAR
                    </button>

                    <p className="mt-4 simpson-hint text-center">
                        ¿Nuevo en Springfield? Prepárate para ver episodios y contenido épico.
                    </p>
                </form>
            </section>
        </main>
    );
}

export { Login };