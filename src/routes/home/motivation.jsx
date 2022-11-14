import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Motivation(props) {
  return (
    <Box bgcolor='bg.dark'>
      <Container
        id='motiv'
        sx={{
          color:'text.secondary',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          display: 'flex',
          maxWidth: 'xl',
          py: 40,
        }}
      >
        <Box>
        <Typography variant='h3'>Why I would like to work at Sovtech?</Typography>
        <br/>
        <Typography variant='h5'>       
        I would love to be part of this winning team.Since Sovetech's start 10 years ago in a garage,they
        have grown exponentially.Creative thinking is one of my strengths and will add value to the projects.
        analysing and communicating my ideas to the team is not a problem.
        </Typography><br/>
        <br />
        <Typography variant='h5'>
        From what I have seen from social media, Sovtech is a great
        company to work for.With many current empolyees and previous employees giving great testimonials
        about how great the people are at Sovtech and how well versed the team is.
        </Typography><br/>
        <br />
        </Box>
      </Container>
    </Box>

  )
}
