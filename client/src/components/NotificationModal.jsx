import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Stack, Box, } from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react';
export default function NotificationModal({isOpen, onClose, notifications, setNotifications}) {

    const [loading, setLoading] = useState(false);

    const deleteAllNotif = async()=>{
        setLoading(true)
        await axios.put('/delete-all-notif').then(({data})=>{
            setLoading(false);
            setNotifications([]);
        }).catch(err=>{
            setLoading(false);
            throw err;
        })
    }
    return (
        <>
            {/* <Button onClick={onOpen}>Open Modal</Button> */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Notifications</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Stack overflowY='scroll' height="60">
                            {notifications.length === 0 && <div className='text-center mt-14 font-semibold text-2xl text-gray-300'>No notifcations</div>}
                            {notifications?.map((notif)=>{
                                return(
                                    <Box w='full' h='fit-content' bg='gray.200' p='2' rounded='md' marginTop='2' key={notif._id}>
                                    {
                                        notif.purpose === 'cancel' ? 
                                        <div className='font-semibold'>{notif?.user?.name} has <span className='text-red-500'>canceled</span> the booking for ``{notif?.placeId?.description}`` due to {notif?.reason} reason</div>
                                        : 
                                        <div className='font-semibold'>{notif?.user?.name} has <span className='text-green-500'>booked</span> the place ``{notif?.placeId?.description}``</div>
                                    }
                                    </Box>
                                )
                            })}
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                    {notifications.length >0 && <Button colorScheme='red' mr={3} onClick={deleteAllNotif} bg="red" isLoading={loading}>
                        Delete all notifications
                    </Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal></>
    )
}