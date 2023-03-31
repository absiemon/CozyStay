import { Skeleton, Stack, Grid } from '@chakra-ui/react';

export default function IndexPageLoader({ path }) {
    return (
        <>
            {path === "single" ?
                <Grid templateColumns='repeat(3, 1fr)' gap={3} mt="10">
                    <Skeleton height='25rem' width='42rem' rounded="md" />
                    <Skeleton height='25rem' width='19rem' rounded="md" />
                    <Skeleton height='25rem' width='19rem' rounded="md" />
                </Grid>
                :
                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                    <Skeleton height='13rem' width='19rem' rounded="md" />
                </Grid>
            }

        </>
    )
}