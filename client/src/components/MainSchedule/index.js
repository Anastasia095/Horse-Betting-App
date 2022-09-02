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
                        <Tr>
                            <Td>2021-03-18</Td>
                            <Td>Pennsylvania Derby</Td>
                            {/* <Td>{raceData[0].course}</Td> */}
                        </Tr>
                        <Tr>
                            <Td>2022-04-07</Td>
                            <Td>Man o’ War Stakes</Td>
                            <Td>Belmont Park</Td>
                        </Tr>
                        <Tr>
                            <Td>2022-10-01</Td>
                            <Td>Shadwell Turf Mile</Td>
                            <Td>Keeneland</Td>
                        </Tr>
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