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

const MainSchedule = () => {

    const { loading, data } = useQuery(QUERY_RACES_TODAY, {
        variables: {
            "date": "2022-09-02"
          },
      });
    const raceData = data?.races || [];
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