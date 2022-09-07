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

import { useQuery } from '@apollo/client';
import { QUERY_RACES_TODAY } from '../../utils/queries';
// import { useParams } from 'react-router-dom';
// const axios = require("axios");
var moment = require('moment');

const MainSchedule = () => {

    const { data, loading } = useQuery(QUERY_RACES_TODAY, {
        variables: {
            date: moment().format('YYYY[-]MM[-]DD')
        }
    });

    const raceData = data?.racesToday || [];
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div class="homemiddle">
            <h1>Race Track Schedule</h1>
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
                        {raceData.map(race => (
                            <Tr>
                                <Td><Button as={'a'} className="btn btn-lg btn-light m-2" variant={'link'} href={'/races/' + race.id_race}>{race.date}</Button></Td>
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
    );
};

export default MainSchedule;