import MenyItems from "./menyItems"

function Meny () {
    return (
        <div className="meny">
            <h1 className="menyTitle">ColosseumRP</h1>
            <div className="menyItem">
                <MenyItems name="Logg Inn"/>
                <MenyItems name="Registrer"/>
            </div>
        </div>
    )
}

export default Meny