const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <div />
                <h6>Quiero recibir más información sobre RENAA cuando esté disponible</h6>
            </div>
        </form>
    )
}

export default Form