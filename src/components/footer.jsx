import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Footer () {
  return (
    <Box sx={{ bgcolor: 'bg.dark' }}>
      <Container sx={{ maxWidth: 'xl', py: 7 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Typography color='text.secondary'>
            <span>&nbsp;&bull;</span> Phone Number:0608114301
          </Typography>
          <Typography color='text.secondary'>
            <span>&nbsp;&bull;</span> Email: mpmoodley@gmail.com
          </Typography>
          <Typography color='text.secondary'>
            <span>&nbsp;&bull;</span> {' '}
          <a
            href='https://za.linkedin.com/in/matthew-moodley-148072235?trk=people-guest_people_search-card'
            target='blank'
            className='lightlink'
          >
            LinkedIn
          </a>
          </Typography>
          <Typography color='text.secondary'>
            <span>&nbsp;&bull;</span> {' '}
          <a
            href='https://github.com/matthewmoodley048?tab=projects'
            target='blank'
            className='lightlink'
          >
            GitHub
          </a>
          </Typography>
          <Typography color='text.secondary'>
            <span>&nbsp;&bull;</span> 2022
          </Typography>
 
        </Box>
      </Container>
    </Box>
  )
}
