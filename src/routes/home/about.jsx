import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Box sx={{bgcolor: 'bg.primary' }}>
      <Container id='about' sx={{ maxWidth: 'xl', py: 40 }}>
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          About
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h5'
          fontWeight='600'
          color='text.primary'
        >
          Technologies
        </Typography>
        <br />
        <Box
          sx={{
            pb: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
              Programming
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 2, pb: 2 }}>
                C# <br />
                C++ <br />
                JavaScript <br />
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
              Engines and Applications
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 5 }}>
                Unity Editor <br />
                Arduino 
                <br /> Notepad++
                <br /> Visual Studio and Visual Studio Code
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
               Softwares used in Engineering Course
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 5 }}>
                Solidworks <br />
                AutoCad <br />
              </Box>
              <Box>
                Fusion360<br />
                FreeCad<br />
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography variant='h6' 
          fontWeight='600' 
          color='text.primary'
        >
          Who am I?
        </Typography>
        <Typography color='text.primary'>
          Cape Town based mechanical engineering student who likes to spend most of his time behind the computer.
          A creative mindset has always been a trait of mine before my interest for programming and video games in general. 
          It all started when I would mash different Lego sets together when I was young. 
          <br />
          <br />
          I am also a problem solver by nature seeing it as a challenge, and a opportunity to grow. 
          I enjoy spending my time at home dissasemble old computers and re-build it with linux installed.
          I develop games and use different systems and applications aswell as use it as a tool to improve 
          my skills.Developing was always a source to learn programming for me, as it combines one of my hobbies 
          gaming, and one of my ever-growing passions, programming.It also provides me to
          test my creativity and problem solving skills.
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h6'
          fontWeight='600'
          color='text.primary'
        >
          Where to from here?
        </Typography>
        <Typography color='text.primary'>
          The most pressing matter is to finish my current examination period with 
          the best performance i can give.The rest of 2022 i plan to focus 
          on doing personal projects and short udemy courses in excitement for the role next
          year, if sovtech would have me.I plan to create diverse projects that challenges me to think out of the box
          and push me further out of my comfort zone with new techniques and methods.
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h6'
          fontWeight='600'
          color='text.primary'
        >
          What am I Using?
        </Typography>
        <Typography color='text.primary'>
          I am currently running Windows 11 and linux, with intentions to switch to linux as my main OS.
        </Typography>
      </Container>
    </Box>
  )
}
