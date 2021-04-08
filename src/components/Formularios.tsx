import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <>
            <h3>Formularios</h3>
            <input 
                type="text" 
                className="form-control my-2"
                placeholder="email"
                value={email}
                onChange={(e) => onChange(e.target.value, 'email')}
            />
            <input 
                type="text" 
                className="form-control my-2"
                placeholder="password"
                value={password}
                onChange={(e) => onChange(e.target.value, 'password')}
            />

            <code>
                <pre>{JSON.stringify(formulario, null, 4)}</pre>
            </code>
        </>
    )
}
