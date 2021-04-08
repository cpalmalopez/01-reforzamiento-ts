interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
} 

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Claus',
        edad: 22,
        direccion: {
            pais: 'Chile',
            casaNo: 123
        }
    }

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 4) }
                </pre>
            </code>
        </>
    )
}
