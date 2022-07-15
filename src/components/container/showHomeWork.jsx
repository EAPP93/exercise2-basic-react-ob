import React,{useEffect,useState} from 'react';
import { dataPerson } from '../pure/person';

const Showhomework = () => {

    //datos persona
    const defaultPerson = new dataPerson('Edwing', 'Picado', 0, new Date());
    
    //manejo del estado

    const [dateState, setDateState] = useState(defaultPerson.isDate);
    const [ageState, setAgeState] = useState(defaultPerson.age);

    useEffect(() => {
        //componentDidMount
        const timerID = setInterval(() => {
            increaseAge(ageState);
            newDate();
        }, 1000);
        return () => {
            //componentWillUnmount
            clearInterval(timerID)
        };
    },[ageState] );

    return (
        <div>
            <h2>
                Hora Actual:{dateState.toLocaleTimeString()};
            </h2>
            <h3>{defaultPerson.name} {defaultPerson.lastName}</h3>
            <h1>Edad: {ageState}</h1>
        </div>
    );

    //cambio del estado *hooks

    function newDate () {
        setDateState( new Date()); 
    }

    function increaseAge(ageState) {
        setAgeState( ageState + 1);
    }

}

export default Showhomework;
