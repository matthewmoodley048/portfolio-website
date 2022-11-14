import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
//{
export default function Intro(props) {
  return (
    <Box sx={{ bgcolor: 'bg.light' }}>
      <Container
        id='home'
        sx={{
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          display: 'flex',
          maxWidth: 'xl',
          py: 75,
        }}
      >
        <Box>
          <Typography sx={{ pb: 2 }} variant='h2' color='text.primary'>
            Welcome to my Site.
          </Typography>
          <Typography color='text.primary' fontSize='1.4em'>
            Hello, my name is{' '}
            <span style={{ fontWeight: '700', color: 'text.focus' }}>Matthew</span>
            , and I am a Mechanical Engineering Student and Systems Administrator.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.9em'>
           This mini-portfolio is a demonstration of Why I would like to work at SovTech and about who I am.
          </Typography>
          <br />
        </Box>
      </Container>
    </Box>
  )
}
