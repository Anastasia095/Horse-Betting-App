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
import { QUERY_RACES } from '../../utils/queries';

const MainSchedule = () => {

    const { loading, data } = useQuery(QUERY_RACES);
    const raceData = data?.races || [];
    // console.log(raceData)
    // console.log(raceData[0].course)
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Race Track Schedule</h1>
            <TableContainer class='table'>
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