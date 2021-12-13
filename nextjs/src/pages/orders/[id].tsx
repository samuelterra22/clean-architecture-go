import {GetStaticPaths, GetStaticProps} from "next";
import axios from "axios";
import {Typography, Card, CardHeader, CardContent, Grid, Box} from "@mui/material";
import  useSWR from 'swr';
import {useRouter} from "next/router";

const fetcher = (url: string) => axios.get(url, {
    headers: {
        'x-token': '94x9errs71q'
    }
}).then(res => res.data)

const OrdersShowPage = (props:any) => {
    const router = useRouter()
    const {id} = router.query
    const {data, error} = useSWR(`http://localhost:3000/orders/${id}`, fetcher)

    return (
        data ? (<div style={{ height: 400, width: "100%" }}>
            <Grid container>
                <Grid item>
                    <Card>
                        <CardHeader
                            title="Order"
                            subheader={data.id}
                            titleTypographyProps={{ align: "center" }}
                            subheaderTypographyProps={{
                                align: "center",
                            }}
                            sx={{
                                backgroundColor: (theme) => theme.palette.grey[700],
                            }}
                        />
                        <CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "baseline",
                                    mb: 2,
                                }}
                            >
                                <Typography component="h2" variant="h3" color="text.primary">
                                    R$ {data.amount}
                                </Typography>
                            </Box>
                            <ul style={{ listStyle: "none" }}>
                                <Typography component="li" variant="subtitle1">
                                    {data.credit_card_number}
                                </Typography>
                                <Typography component="li" variant="subtitle1">
                                    {data.credit_card_name}
                                </Typography>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>) : null
    );
};

export default OrdersShowPage

export const getStaticProps: GetStaticProps = async (context) => {
  return {
      props: {},
      revalidate: 20
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}