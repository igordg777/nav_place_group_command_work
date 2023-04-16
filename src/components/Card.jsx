import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Text, Heading, Button, SimpleGrid, Image, Stack, Divider, ButtonGroup, useDisclosure, Modal, ModalFooter, ModalBody, ModalCloseButton, ModalOverlay, ModalContent, ModalHeader } from '@chakra-ui/react'
import './Card.css'
import posmanImg from './images/Postman.png'
import gitImg from './images/git.png'
import dockerImg from './images/docker.png'
import gitCommandsImg from './images/git_commands.jpg'
import fullstackPartFirst from './images/fullstack_part_first.jpg'






function CardComponent() {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const [sunduk, setSunduk] = useState('')

    const lessons = [

        {
            theme: 'Postman',
            date: '18.03.2023',
            link_video: 'https://youtu.be/obIrq8b84Kg',
            description: 'На учебном занятиии мы рассмотрели понятие API, особенности тестирования API сервера с помощью программы Postman (отправка get, post запросов с телом запроса)',
            link_presentation: null,
            img: posmanImg
        },
        {
            theme: 'Основы Git',
            date: '25.03.2023',
            link_video: 'https://youtu.be/nQhnT_X1GBg',
            description: 'На учебном занятии изучили основы гит (основные функции, установка, подключение)',
            link_presentation: null,
            img: gitImg

        },
        {
            theme: 'Docker',
            date: '01.04.2023',
            link_video: 'https://youtu.be/fFJM3TVZttk',
            description: 'На учебном занятии познакомились с технологией Docker. Практически потренировались использовать платформу контейнеризации  Docker для упрощения и более быстрого деплоя приложений',
            link_presentation: null,
            img: dockerImg
        },
        {
            theme: 'Git commands',
            date: '07.04.2023',
            link_video: 'https://youtu.be/vb_xoQOctjI',
            description: 'На учебном занятии вспомнили, повторили и изучили новые команды git для управления версиями приложений',
            link_presentation: null,
            img: gitCommandsImg
        },
        {
            theme: 'command_work',
            date: '14.04.2023',
            link_video: 'https://youtu.be/4oLm39eK3QQ',
            description: 'На учебном занятии начали работу по созданию сайта для путешествий. Разделились на команды фронтенда и бэкенда, развернули обе части приложения через реакт и экспресс, создали конфигурацию бд postgres. Затем загрузили полученный результат в общий репозиторий на гитхаб',
            link_presentation: null,
            img: fullstackPartFirst
        },
    ]

    return (
        <>
            {/* <div style={{ width: '300px', height: '250px', border: '2px solid black' }}>
                <Card align='center'>
                    <CardHeader>
                        <Heading size='md'> Customer dashboard</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>View a summary of all your customers over the last month.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme='blue'>View here</Button>
                    </CardFooter>
                </Card>
            </div> */}
            <h3>Командная работа в GIT по созданию fullstack приложения</h3>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

                {
                    lessons.map((lesson) => {
                        return <Card maxW='sm' >
                            <CardBody>
                                <Image
                                    src={lesson.img}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    {/* <Heading size='lg'>Тема занятия: Postman</Heading> */}
                                    <Heading size='md'>Тема занятия: {lesson.theme}</Heading>
                                    <Text>Дата: {lesson.date}</Text>

                                    <Text>
                                        <Button onClick={() => { onOpen(); setSunduk(lesson.description) }} variant='solid' colorScheme='green'>
                                            Описание урока
                                        </Button>


                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='1' className='buttonGroupCustomStyle' style={{ paddingBottom: 15 }}>
                                    <a href={lesson.link_video} target="_blanc"><Button variant='solid' colorScheme='blue'>
                                        Смотреть видео
                                    </Button></a>

                                </ButtonGroup>

                            </CardFooter>
                            {/* <CardFooter>
    <ButtonGroup spacing='1' className='buttonGroupCustomStyle'>
        <Button variant='solid' colorScheme='blue'>
            Презентация
        </Button>

    </ButtonGroup>

</CardFooter> */}
                        </Card>
                    })
                }


                {/* <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Тема урока</Heading>
                            <Text>
                                <Button onClick={() => { onOpen(); setSunduk('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat, ea minus earum explicabo fugiat repellendus iusto magni necessitatibus, eius laboriosam molestiae libero, obcaecati architecto ducimus. Sit aspernatur dignissimos cumque.') }} variant='solid' colorScheme='blue'>
                                    Описание урока
                                </Button>

                            </Text>

                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter className='topButton' >
                        <ButtonGroup spacing='1' className='buttonGroupCustomStyle'>
                            <Button onClick={() => { onOpen(); setSunduk('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat, ea minus earum explicabo fugiat repellendus iusto magni necessitatibus, eius laboriosam molestiae libero, obcaecati architecto ducimus. Sit aspernatur dignissimos cumque.') }} variant='solid' colorScheme='blue'>
                                Смотреть видео
                            </Button>

                        </ButtonGroup>

                    </CardFooter>
                    <CardFooter>
                        <ButtonGroup spacing='1' className='buttonGroupCustomStyle'>
                            <Button onClick={() => { onOpen(); setSunduk('тут презентация') }} variant='solid' colorScheme='blue'>
                                Презентация
                            </Button>

                        </ButtonGroup>

                    </CardFooter>
                </Card> */}

            </SimpleGrid>



            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Описание урока</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {sunduk}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Закрыть</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardComponent