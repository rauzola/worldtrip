import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
    return (
        <>
            <Box borderRadius="4px" overflow="hidden">
                <Image src="/ReinoUnido.png" alt="dasdasd" h="170px" w="100%" />
                <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                    <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino Unido</Text>
                    </Flex>
                    <Image src="/ReinoUnido1.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />

                </Flex>
            </Box>

            <Box borderRadius="4px" overflow="hidden">
                <Image src="/Paris.png" alt="dasdasd" h="170px" w="100%" />
                <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                    <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Paris</Heading>
                        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">França</Text>
                    </Flex>
                    <Image src="/França.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />

                </Flex>
            </Box>

            <Box borderRadius="4px" overflow="hidden">
                <Image src="/Roma.png" alt="dasdasd" h="170px" w="100%" />
                <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                    <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Roma</Heading>
                        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Itália</Text>
                    </Flex>
                    <Image src="/Itália.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />

                </Flex>
            </Box>

            <Box borderRadius="4px" overflow="hidden">
                <Image src="/Praga.png" alt="dasdasd" h="170px" w="100%" />
                <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                    <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Praga</Heading>
                        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">República Tcheca</Text>
                    </Flex>
                    <Image src="/República Tcheca.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />

                </Flex>
            </Box>


            <Box borderRadius="4px" overflow="hidden">
                <Image src="/Amsterdã.png" alt="dasdasd" h="170px" w="100%" />
                <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                    <Flex direction="column">
                        <Heading fontSize="xl" fontWeight="500">Amsterdã</Heading>
                        <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Holanda</Text>
                    </Flex>
                    <Image src="/Holanda.png" w="30px" h="30px" borderRadius="50%" objectFit="cover" />

                </Flex>
            </Box>
        </>
    )
}