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
    Button
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_HORSES } from '../../utils/queries';
var moment = require('moment');

const SingleSchedule = () => {
    const { raceid } = useParams();
    console.log("===============>" + parseInt(raceid));
    const { data, loading } = useQuery(QUERY_HORSES, {
        variables: {
            id_race: parseInt(raceid)
        }
    }
    );
    console.log(data);
    const horsesData = data?.horses || [];
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='middle'>
            <h1>Race Track Schedule</h1>
            <Button as={'a'} className="btn btn-lg btn-light m-2" variant={'link'} href={'/placebet/' + raceid}>Place a Bet</Button>
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
                    {horsesData.map(horse => (
                        <Tr>
                            <Td>{horse.horse}</Td>
                            <Td>{horse.jockey}</Td>
                            <Td>{horse.trainer}</Td>
                            <Td>{horse.age}</Td>
                            <Td>{horse.number}</Td>
                            <Td>{horse.position}</Td>
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

export default SingleSchedule;