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

const SingleSchedule = () => {

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
                            <Th>Horse</Th>
                            <Th>Jockey</Th>
                            <Th>Trainer</Th>
                            <Th>Age</Th>
                            <Th>Number</Th>
                            <Th>Position</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
                                <Td></Td>
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

export default SingleSchedule;