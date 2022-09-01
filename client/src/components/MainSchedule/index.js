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

const MainSchedule = () => {
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
            <Tr>
                <Td>2021-03-18</Td>
                <Td>Pennsylvania Derby</Td>
                <Td>Parx Racing</Td>
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