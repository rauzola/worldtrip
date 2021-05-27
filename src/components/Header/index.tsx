import { Flex, Grid, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            bg="white"
            w="100%"
            as="header"
            mx="auto"
            px="1rem"
            h={[
                "50px",
                "100px"]}
            align="center"
            justify="center"
        >

        <Grid
            h="100%"
            mx="auto"
            w="100%"
            maxW="1160px"
            alignItems="center"
            templateColumns="repeat(3, 1fr)"
            justifyContent="center"
        >

            <Image
                w={["81px", "184px"]}
                src="/logo.svg"
                alt="Um aviã voando"
                justifySelf="center"
                gridColumn="2"
            />

        </Grid>

        </Flex>
    )
}