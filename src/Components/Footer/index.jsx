import React from 'react';
import { Grid, Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import enamad from '/src/assets/images/enamad.jpg'
import samandehi from '/src/assets/images/samandehi.jpg'



function Footer() {
    return (
        <Box sx={{ p: '1.5rem', backgroundColor: 'grey.900' }}>

            <Box sx={{ maxWidth: '500px', mx: 'auto', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <Accordion sx={{ backgroundColor: 'grey.800', boxShadow: 'none' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography fontFamily={'gandom'} component="span" color="white">کارفرمایان</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="white" fontFamily={'gandom'}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ backgroundColor: 'grey.800', boxShadow: 'none' }} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography fontFamily={'gandom'} component="span" color="white">درباره ما</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Grid spacing={2} sx={{maxWidth:'300px', mx:'auto' , my:'2rem' , justifyContent:'center'}} container>

                <Grid item >

                    <img src={enamad} style={{borderRadius:'.25rem'}}/>

                </Grid>

                <Grid item>

                    <img src={samandehi} style={{borderRadius:'.25rem'}}/>

                </Grid>

            </Grid>

        </Box>
    );
}

export default Footer;
