'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Alert,
  Snackbar,
  Grow,
  Zoom,
  Fab,
  Chip
} from '@mui/material';
import {
  Favorite,
  Cake,
  Celebration,
  MusicNote,
  Star,
  Send,
  Palette,
  EmojiEmotions,
  Lightbulb,
  LocalFlorist,
  Edit,
  Refresh,
  Pause,
  PlayArrow
} from '@mui/icons-material';

export default function BirthdayWishPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State variables
  const [name, setName] = useState('My Love');
  const [relationship, setRelationship] = useState('girlfriend');
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState('You make every day brighter and every moment more beautiful.');
  const [specialMemories, setSpecialMemories] = useState('Our first date, that surprise trip, and all our late-night talks');
  const [wishes, setWishes] = useState('Endless happiness, amazing adventures, and dreams come true');
  const [colorTheme, setColorTheme] = useState('romantic');
  const [fontSize, setFontSize] = useState(16);
  const [addConfetti, setAddConfetti] = useState(true);
  const [addMusic, setAddMusic] = useState(false);
  const [surpriseElements, setSurpriseElements] = useState(['balloons', 'hearts']);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [animate, setAnimate] = useState(true);

  // Color themes
  const themes = {
    romantic: {
      primary: '#e91e63',
      secondary: '#f8bbd9',
      background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)',
      card: 'linear-gradient(145deg, #ffffff, #fff5f9)',
      text: '#880e4f'
    },
    elegant: {
      primary: '#9c27b0',
      secondary: '#e1bee7',
      background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
      card: 'linear-gradient(145deg, #ffffff, #faf4ff)',
      text: '#4a148c'
    },
    vibrant: {
      primary: '#2196f3',
      secondary: '#bbdefb',
      background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
      card: 'linear-gradient(145deg, #ffffff, #f0f8ff)',
      text: '#0d47a1'
    },
    golden: {
      primary: '#ff9800',
      secondary: '#ffe0b2',
      background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
      card: 'linear-gradient(145deg, #ffffff, #fff8e1)',
      text: '#e65100'
    }
  };

  const currentTheme = themes[colorTheme as keyof typeof themes] || themes.romantic;

  // Surprise elements options - using emojis for non-existent icons
  const surpriseOptions = [
    { value: 'balloons', label: 'Balloons', icon: <span style={{ fontSize: '20px' }}>🎈</span> },
    { value: 'hearts', label: 'Hearts', icon: <Favorite /> },
    { value: 'stars', label: 'Stars', icon: <Star /> },
    { value: 'flowers', label: 'Flowers', icon: <LocalFlorist /> },
    { value: 'music', label: 'Music Notes', icon: <MusicNote /> },
    { value: 'cake', label: 'Cake', icon: <Cake /> },
    { value: 'fireworks', label: 'Fireworks', icon: <span style={{ fontSize: '20px' }}>✨</span> }
  ];

  // Relationship options
  const relationshipOptions = [
    'girlfriend', 'fiancée', 'wife', 'partner', 'soulmate', 'darling', 'queen'
  ];

  // Music tracks (simulated)
  const musicTracks = [
    { title: 'Happy Birthday', icon: <Cake /> },
    { title: 'Love Song', icon: <Favorite /> },
    { title: 'Celebration', icon: <Celebration /> }
  ];

  const handleSurpriseToggle = (element: string) => {
    setSurpriseElements(prev =>
      prev.includes(element)
        ? prev.filter(e => e !== element)
        : [...prev, element]
    );
  };

  const handleGenerateWish = () => {
    const wishes = [
      `May your ${age}th year be filled with joy, love, and incredible adventures!`,
      `Here's to celebrating the amazing person you are! Happy ${age}th birthday!`,
      `May all your dreams come true this year, my beautiful ${relationship}!`,
      `Wishing you a day as wonderful as you are! Happy Birthday!`,
      `Another year older, another year more amazing! Happy ${age}th!`
    ];
    setMessage(wishes[Math.floor(Math.random() * wishes.length)]);
    setSnackbarOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  };

  const handleReset = () => {
    setName('My Love');
    setRelationship('girlfriend');
    setAge(25);
    setMessage('You make every day brighter and every moment more beautiful.');
    setSpecialMemories('Our first date, that surprise trip, and all our late-night talks');
    setWishes('Endless happiness, amazing adventures, and dreams come true');
    setColorTheme('romantic');
    setFontSize(16);
    setAddConfetti(true);
    setAddMusic(false);
    setSurpriseElements(['balloons', 'hearts']);
    setShowPreview(false);
  };

  const renderSurpriseElement = (element: string, index: number) => {
    const baseStyle = {
      position: 'absolute' as const,
      animation: animate ? 'float 3s infinite ease-in-out' : 'none',
      animationDelay: `${index * 0.5}s`
    };

    switch (element) {
      case 'balloons':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: currentTheme.primary,
              fontSize: '2rem'
            }}
          >
            🎈
          </Box>
        );
      case 'hearts':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: '#ff4081',
              fontSize: '1.5rem'
            }}
          >
            ❤️
          </Box>
        );
      case 'stars':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: '#ffd700',
              fontSize: '1.2rem'
            }}
          >
            ⭐
          </Box>
        );
      case 'flowers':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: '#4caf50',
              fontSize: '1.8rem'
            }}
          >
            🌸
          </Box>
        );
      case 'music':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: currentTheme.primary,
              fontSize: '1.5rem'
            }}
          >
            🎵
          </Box>
        );
      case 'cake':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              color: '#795548',
              fontSize: '2rem'
            }}
          >
            🎂
          </Box>
        );
      case 'fireworks':
        return (
          <Box
            key={element}
            sx={{
              ...baseStyle,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              fontSize: '2rem'
            }}
          >
            ✨
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: currentTheme.background,
        py: 4,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Animated background elements */}
      {surpriseElements.map((element, index) => renderSurpriseElement(element, index))}

      <Container maxWidth="lg">
        <Grow in={!showPreview} timeout={1000}>
          <Box>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                color: currentTheme.text,
                fontWeight: 'bold',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <Celebration sx={{ fontSize: '2.5rem' }} />
              Create a Beautiful Birthday Wish
              <Cake sx={{ fontSize: '2.5rem' }} />
            </Typography>

            <Card
              sx={{
                mb: 4,
                background: currentTheme.card,
                boxShadow: `0 8px 32px ${currentTheme.primary}22`,
                borderRadius: 4
              }}
            >
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {/* Left Column - Personal Details */}
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom sx={{ color: currentTheme.primary }}>
                        <EmojiEmotions sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Personal Details
                      </Typography>

                      <TextField
                        fullWidth
                        label="Her Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Favorite color="primary" />
                            </InputAdornment>
                          )
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: currentTheme.primary
                            }
                          }
                        }}
                      />

                      <FormControl fullWidth margin="normal">
                        <InputLabel>Relationship</InputLabel>
                        <Select
                          value={relationship}
                          label="Relationship"
                          onChange={(e) => setRelationship(e.target.value)}
                          sx={{ borderRadius: 2 }}
                        >
                          {relationshipOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <Box sx={{ mt: 3, mb: 2 }}>
                        <Typography gutterBottom sx={{ color: currentTheme.text }}>
                          Age: {age} years
                        </Typography>
                        <Slider
                          value={age}
                          onChange={(_, value) => setAge(value as number)}
                          min={18}
                          max={100}
                          step={1}
                          valueLabelDisplay="auto"
                          sx={{
                            color: currentTheme.primary,
                            '& .MuiSlider-thumb': {
                              '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${currentTheme.primary}22`
                              }
                            }
                          }}
                        />
                      </Box>

                      <TextField
                        fullWidth
                        label="Special Memories"
                        value={specialMemories}
                        onChange={(e) => setSpecialMemories(e.target.value)}
                        margin="normal"
                        multiline
                        rows={2}
                        helperText="Share your favorite moments together"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lightbulb color="primary" />
                            </InputAdornment>
                          )
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Birthday Wishes"
                        value={wishes}
                        onChange={(e) => setWishes(e.target.value)}
                        margin="normal"
                        multiline
                        rows={2}
                        helperText="What do you wish for her this year?"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Star color="primary" />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>

                    {/* Right Column - Customization */}
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom sx={{ color: currentTheme.primary }}>
                        <Palette sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Customize Your Wish
                      </Typography>

                      <FormControl component="fieldset" fullWidth sx={{ mt: 2 }}>
                        <Typography gutterBottom sx={{ color: currentTheme.text }}>
                          Color Theme
                        </Typography>
                        <RadioGroup
                          row
                          value={colorTheme}
                          onChange={(e) => setColorTheme(e.target.value)}
                        >
                          {Object.entries(themes).map(([key, theme]) => (
                            <FormControlLabel
                              key={key}
                              value={key}
                              control={
                                <Radio
                                  sx={{
                                    color: theme.primary,
                                    '&.Mui-checked': {
                                      color: theme.primary
                                    }
                                  }}
                                />
                              }
                              label={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>

                      <Box sx={{ mt: 3, mb: 2 }}>
                        <Typography gutterBottom sx={{ color: currentTheme.text }}>
                          Font Size: {fontSize}px
                        </Typography>
                        <Slider
                          value={fontSize}
                          onChange={(_, value) => setFontSize(value as number)}
                          min={12}
                          max={24}
                          step={1}
                          valueLabelDisplay="auto"
                          sx={{ color: currentTheme.primary }}
                        />
                      </Box>

                      <Typography gutterBottom sx={{ mt: 3, color: currentTheme.text }}>
                        Add Special Elements
                      </Typography>
                      <FormGroup row>
                        {surpriseOptions.map((option) => (
                          <FormControlLabel
                            key={option.value}
                            control={
                              <Checkbox
                                checked={surpriseElements.includes(option.value)}
                                onChange={() => handleSurpriseToggle(option.value)}
                                icon={option.icon}
                                checkedIcon={option.icon}
                                sx={{
                                  color: currentTheme.primary,
                                  '&.Mui-checked': {
                                    color: currentTheme.primary
                                  }
                                }}
                              />
                            }
                            label={option.label}
                          />
                        ))}
                      </FormGroup>

                      <FormGroup sx={{ mt: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={addConfetti}
                              onChange={(e) => setAddConfetti(e.target.checked)}
                              sx={{ color: currentTheme.primary }}
                            />
                          }
                          label="Add Confetti Effect"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={addMusic}
                              onChange={(e) => setAddMusic(e.target.checked)}
                              sx={{ color: currentTheme.primary }}
                            />
                          }
                          label="Add Background Music"
                        />
                      </FormGroup>

                      <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                          variant="contained"
                          onClick={handleGenerateWish}
                          startIcon={<Refresh />}
                          sx={{
                            bgcolor: currentTheme.secondary,
                            color: currentTheme.text,
                            '&:hover': {
                              bgcolor: currentTheme.primary,
                              color: 'white'
                            }
                          }}
                        >
                          Generate Random Wish
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleReset}
                          startIcon={<Edit />}
                          sx={{ borderColor: currentTheme.primary, color: currentTheme.primary }}
                        >
                          Reset Form
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        bgcolor: currentTheme.primary,
                        px: 6,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: 8,
                        '&:hover': {
                          bgcolor: currentTheme.text,
                          transform: 'scale(1.05)',
                          transition: 'transform 0.2s'
                        }
                      }}
                    >
                      Create Beautiful Birthday Wish
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grow>

        {/* Preview Section */}
        {showPreview && (
          <Zoom in={showPreview} timeout={800}>
            <Box>
              <Card
                sx={{
                  background: currentTheme.card,
                  boxShadow: `0 20px 60px ${currentTheme.primary}33`,
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {addConfetti && (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'none',
                      '&::before': {
                        content: '"🎊"',
                        position: 'absolute',
                        animation: 'sparkle 1s infinite',
                        fontSize: '2rem'
                      }
                    }}
                  />
                )}

                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    {/* Animated elements */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        animation: 'pulse 2s infinite'
                      }}
                    >
                      <Cake sx={{ fontSize: 60, color: currentTheme.primary }} />
                    </Box>

                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: `${fontSize * 2}px`,
                        color: currentTheme.text,
                        fontWeight: 'bold',
                        mt: 6,
                        mb: 3,
                        animation: animate ? 'pulse 3s infinite' : 'none'
                      }}
                    >
                      🎉 Happy Birthday {name}! 🎉
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        color: currentTheme.primary,
                        mb: 4,
                        fontStyle: 'italic'
                      }}
                    >
                      To My Beautiful {relationship.charAt(0).toUpperCase() + relationship.slice(1)}
                    </Typography>

                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        mb: 4,
                        background: `linear-gradient(135deg, ${currentTheme.secondary}22, transparent)`,
                        borderRadius: 3,
                        borderLeft: `6px solid ${currentTheme.primary}`,
                        animation: animate ? 'float 6s infinite ease-in-out' : 'none'
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: `${fontSize}px`,
                          lineHeight: 1.8,
                          color: currentTheme.text
                        }}
                      >
                        {message}
                      </Typography>
                    </Paper>

                    <Grid container spacing={3} sx={{ mb: 4 }}>
                      <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ color: currentTheme.primary, display: 'flex', alignItems: 'center', gap: 1 }}
                          >
                            <Favorite /> Special Memories
                          </Typography>
                          <Typography sx={{ fontSize: `${fontSize}px` }}>
                            {specialMemories}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 3, height: '100%', borderRadius: 3 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ color: currentTheme.primary, display: 'flex', alignItems: 'center', gap: 1 }}
                          >
                            <Star /> My Wishes For You
                          </Typography>
                          <Typography sx={{ fontSize: `${fontSize}px` }}>
                            {wishes}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                      {musicTracks.map((track, index) => (
                        <Chip
                          key={index}
                          icon={track.icon}
                          label={track.title}
                          sx={{
                            bgcolor: currentTheme.secondary,
                            color: currentTheme.text,
                            '&:hover': { bgcolor: currentTheme.primary, color: 'white' }
                          }}
                        />
                      ))}
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        color: currentTheme.text,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2
                      }}
                    >
                      <Celebration /> You're turning {age}! <Celebration />
                    </Typography>

                    <Typography
                      variant="h3"
                      sx={{
                        color: currentTheme.primary,
                        fontWeight: 'bold',
                        mt: 4,
                        animation: animate ? 'pulse 2s infinite' : 'none'
                      }}
                    >
                      🎂 Make a Wish! 🎂
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => window.print()}
                  sx={{
                    bgcolor: currentTheme.primary,
                    mr: 2,
                    '&:hover': { bgcolor: currentTheme.text }
                  }}
                >
                  Print This Wish
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => setShowPreview(false)}
                  sx={{ borderColor: currentTheme.primary, color: currentTheme.primary }}
                >
                  Edit Again
                </Button>
              </Box>
            </Box>
          </Zoom>
        )}
      </Container>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          New birthday wish generated! Check it out above!
        </Alert>
      </Snackbar>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: currentTheme.primary
        }}
        onClick={() => setAnimate(!animate)}
      >
        {animate ? <Pause /> : <PlayArrow />}
      </Fab>
    </Box>
  );
}