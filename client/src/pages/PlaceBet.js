import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useQuery } from '@apollo/client';
import { QUERY_HORSES } from '../utils/queries';
import { useParams } from 'react-router-dom';
import {
    Button,
} from '@chakra-ui/react'

function Tournament() {
    const { raceid } = useParams();
    const { data, loading } = useQuery(QUERY_HORSES, {
        variables: {
            id_race: parseInt(raceid)
        }
    }
    );
    const horseData = data?.horses || [];
    const [horses, updateHorses] = useState(horseData);
    
    function handleOnDragEnd(result) {
      if (!result.destination) return;
      console.log(horses);
      const items = Array.from(horses);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateHorses(items);
      console.log(items);
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Final Space horses</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                  {horseData.map(({id_horse, horse}, index) => {
                    return (
                      <Draggable key={id_horse} draggableId={horse} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className="characters-thumb">
                              <img src='/images/horse-race.jpg' alt={`${horse} Thumb`} />
                            </div>
                            <p>
                              { horse }
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
        <p>
          Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
        </p>
      </div>
    );
  }
  
  export default Tournament;
