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
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
            </Tr>
            <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
            </Tr>
            <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>0.91444</Td>
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