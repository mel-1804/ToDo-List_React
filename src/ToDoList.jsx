import { useState } from "react"
export function ToDoList() {

    const [valorActividad, setValorActividad] = useState("");
    const [arregloTareas, setArregloTareas] = useState([]);
    const [listaActividad, setListaActividad] = useState ("")
        
    const handlerEnter = (e) => {
        if (e.keyCode === 13) {
            setArregloTareas([...arregloTareas, valorActividad])
            setValorActividad("")
        }
    }

   
    return (
        <div className="fondo d-flex justify-content-center">
            <div className="papel rounded-4 border border-4 p-4">
                <p className="titulo">ToDo<i className="mancuerna fa-solid fa-dumbbell"></i>List</p>
                <div className="input-group mb-3">
                    <input type="text"
                        className="entrada"
                        name="entrada"
                        placeholder="Enter your work out"
                        aria-label="entrada"
                        aria-describedby="basic-addon1"
                        value={valorActividad}
                        onChange={(e) => setValorActividad(e.target.value)}
                        onKeyDown={(e) => handlerEnter(e)} />
                </div>
                <div>
                    <ul className="listaActividades" value={listaActividad}>
                        {arregloTareas.map((tarea, i) => {
                            return (
                                <div key={i} className="listaActividades d-flex justify-content-between">
                                    <li className="actividad">{tarea}</li>
                                    <div className="eliminar"
                                    onClick={(e) => setListaActividad(delete(arregloTareas[i]))}>
                                        x
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="contador">{arregloTareas.length} PENDING ACTIVITIES</div>
            </div>
        </div>
    )
}

