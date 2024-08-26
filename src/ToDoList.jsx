import { useState } from "react"

export function ToDoList() {

const [actividad, setActividad] = useState ({
    actividad: " "
});

const handlerChange = (e) =>{
    setActividad({...actividad, [e.target.name]: e.target.value});
}


    return (
        <div className="fondo d-flex justify-content-center">
            <div className="papel rounded-4 border border-4 p-4">
                <p className="titulo">ToDo<i className="mancuerna fa-solid fa-dumbbell"></i>List</p>
                <div className="input-group mb-3">
                    <input type="text" 
                    className="entrada form-control"
                    name="entrada" 
                    placeholder="Enter your work out" 
                    aria-label="entrada" 
                    aria-describedby="basic-addon1"
                    onKeyDown={(e)=> handlerChange(e)}/>
                </div>
                <div>
                    <ol className="listaActividades">
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                        <li className="actividad"></li>
                    </ol>
                </div>
                <div className="contador">...</div>
            </div>
        </div>
    )
}

