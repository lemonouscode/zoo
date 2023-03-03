import React from "react";
import { useState } from "react";

const myAnimals = [
    {vrsta:"Pas",ime:"Rex",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
    {vrsta:"Macka",ime:"Macka",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
    {vrsta:"Konj",ime:"RandomKonj",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
    {vrsta:"Kornjaca",ime:"RandomKornjaca",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
    {vrsta:"Zec",ime:"RandomZec",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
    {sektor:"Ptice", vrsta:"Zec",ime:"RandomZec",datumRodjenja: new Date("2019/04/01").toISOString().slice(0, 10)},
]

const AnimalList = ()=>{

    
    const [animals, setAnimals] = useState(myAnimals);

    // Zadatak 3
    const removeAnimal = (index) => {
        const removedAnimal = animals.filter((element,i) => {
            return i !== index;
        });

        setAnimals(removedAnimal);
    }


    // Zadatak 4
    const moveToTop = (index)=>{
        const first = animals.filter((element,i) => {
            return i === index;
        });

        const restOfArray = animals.filter((element,i) => {
            return i !== index;
        });

        const res = [...first, ...restOfArray]

        setAnimals(res);
    }
    

    // Zadatak 5
    const [vrsta, setVrsta] = useState();
    const [ime, setIme] = useState();
    const [datumRodjenja, setDatumRodjenja] = useState()
    const [sektor, setSektor] = useState("Ptice");

    const addAnimal = (e)=>{
        e.preventDefault();

        const res = {
            vrsta:vrsta,
            ime:ime,
            datumRodjenja: new Date(datumRodjenja).toISOString().slice(0, 10),
            sektor:sektor
        }

        setAnimals([].concat(animals, res))
    }
    

    const showSektorAnimals = (name)=>{
        console.log(name)

        const res = animals.filter(singleAnimal => singleAnimal.sektor === name);

        alert(JSON.stringify(res));
    }


    return (
        <>
        <form onSubmit={(e)=>{addAnimal(e)}}>
            <label htmlFor="">Vrsta</label>
            <input type="text" onChange={(e)=>{setVrsta(e.target.value)}}/>
            <label htmlFor="">Ime</label>
            <input type="text" onChange={(e)=>{setIme(e.target.value)}}/>
            <label htmlFor="">Datum Rodjenja</label>
            <input type="date" onChange={(e)=>{setDatumRodjenja(e.target.value)}} />
            <select id="sektors" value={sektor} onChange={(e)=>{setSektor(e.target.value)}}>
                <option value="Ptice">Ptice</option>
                <option value="Zmije">Zmije</option>
                <option value="Ribe">Ribe</option>
                <option value="Nesto">Nesto</option>
            </select>
            <button>Add Animal</button>
        </form>


        <table>
            <thead>
            <tr>
                <th>Vrsta</th>
                <th>Ime</th>
                <th>Datum Rodjenja </th>
                <th>Sektor </th>
            </tr>
            </thead>
            <tbody>
            { animals.map((element,index) => (
                <tr key={index}>
                    <td>{element.vrsta} </td>
                    <td>{element.ime}</td>
                    <td> {element.datumRodjenja != "" ? element.datumRodjenja : "Nepoznat"} </td>
                    {element.sektor && <td>{element.sektor}</td>}
                    <td><button onClick={()=>removeAnimal(index)}>Remove</button></td>
                    <td><button onClick={()=>moveToTop(index)}>Move To Top</button></td>
                </tr>
            )) }
            </tbody>
        </table>


        <table>
            <thead>
            <tr>
                <th>Sektor </th>
            </tr>
            </thead>
            <tbody>
                {animals.map((element,index)=> (
                        <>
                            {element.sektor != undefined &&
                                <tr key={index}>
                                    <td>{element.sektor}</td>
                                    <td><button onClick={()=>showSektorAnimals(element.sektor)}>Check animals</button></td>
                                </tr>
                            }
                        </>
                    ) 
                )}
            </tbody>
        </table>

        

        </>
    );

}



export default AnimalList;