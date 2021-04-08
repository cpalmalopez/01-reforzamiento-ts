export const TiposBasicos = () => {

    const nombre: string = 'Claus';
    const edad: number = 22;
    const estaActivo: boolean = true;

    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];
    
    return (
        <>
            <h3>Tipos básicos</h3>
            { nombre } - { edad }, { (estaActivo) ? 'activo' : 'inactivo' }
            <br/>
            { poderes.join(', ')}
        </>
    )
}
