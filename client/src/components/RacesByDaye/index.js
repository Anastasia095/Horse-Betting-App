import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    TableContainer,
} from '@chakra-ui/react'
const RaceList = (props) => {
    console.log("CHILD");
    console.log(props);
    const races = props.races;
    console.log(races);
    if (props == undefined) {
        console.log("undefined");
        return <h3>No Races Yet</h3>;
    } else if (races.length > 0) {
        return (
            <div>
                <TableContainer className='table'>
                    <Table variant='striped' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Race</Th>
                                <Th>Track</Th>
                                <Th>Race_ID</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {races.map(race => (
                                <Tr>
                                    <Td>{race.date}</Td>
                                    <Td>{race.age}</Td>
                                    <Td>{race.course}</Td>
                                    <Td>{race.id_race}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </div>
        );;
    } else
    return <h3>No Races Yet</h3>


};

export default RaceList;
