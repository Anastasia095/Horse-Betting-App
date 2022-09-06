import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useQuery } from '@apollo/client';
import { QUERY_HORSES } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { ADD_BETS } from '../utils/mutations';
import { useMutation } from '@apollo/client';
// import {
//     Button,
// } from '@chakra-ui/react'


function Placebet() {

    const { raceid } = useParams();
    const { data, loading, error } = useQuery(QUERY_HORSES, {
        variables: {
            id_race: parseInt(raceid)
        }
    });
    if(error){
        console.log(error);
    }
    const [horses, updateHorses] = useState([]);

    useEffect(() => {
        if (loading === false && data) {
            updateHorses(data.horses);
        }
    }, [loading, data])

    console.log(horses);
    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(horses);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateHorses(items);
    }
    const [addBets, { err }] = useMutation(ADD_BETS);
    const bet = (event) => {
        event.preventDefault();
        console.log(err);
        console.log(horses);

        try {
            const data = addBets({
                variables: {
                    horse: horses[0].id_horse,
                    //currently hardcoded
                    price: 3.25,
                },
            });

        } catch (err) {
            console.error(err);
        }

    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Final Space horses</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {horses.map(({ id_horse, horse }, index) => {
                                    return (
                                        <Draggable key={id_horse} draggableId={horse} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="characters-thumb">
                                                        <img src='/images/horse-race.jpg' alt={`${horse} Thumb`} />
                                                    </div>
                                                    <p>
                                                        {horse}
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
            <form>
            <button className="btn btn-lg btn-light m-2" onClick={bet}>
                Place a Bet!
            </button>
            </form>
        </div>
    );
}

export default Placebet;
