import React from 'react';
import { Input, Wrap, WrapItem } from '@chakra-ui/react'
import '../../css/editform.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
const EditForm = () => {
    return (
        <div class="background">
            <div class="avatar">
                <Wrap>
                    <WrapItem>
                    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                    </WrapItem>
                </Wrap>
            </div>
            <form>
                <Input placeholder='First name' size='lg' />
                <Input placeholder='Last name' size='lg' />
                <Input placeholder='Email' size='lg' />
                <Button colorScheme='teal' variant='outline'>
                    Save Changes
                </Button>
            </form>
        </div>
        
    );
};

export default EditForm;