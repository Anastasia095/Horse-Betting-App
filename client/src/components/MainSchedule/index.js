import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { useQuery } from '@apollo/client';
import { QUERY_RACES_TODAY } from '../../utils/queries';
var moment = require('moment');

const MainSchedule = () => {

    console.log(moment().format('YYYY[-]MM[-]DD'))
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
        <div className='middle'>
            <h1>Race Track Schedule</h1>
            <TableContainer className='table'>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Race</Th>
                            <Th>Track</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {raceData.map(race => (
                            <Tr>
                                <Td>{race.date}</Td>
                                <Td>{race.age}</Td>
                                <Td>{race.course}</Td>
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