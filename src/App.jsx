import { Routes, Route } from 'react-router-dom';
import { Container, Box, Typography, Divider } from '@mui/material';
import './App.css';

// Sections
import Section01 from './components/sections/Section01';
import Section02 from './components/sections/Section02';

// Science Pages
import DeepLearning from './pages/science/ai/DeepLearning';
import Mars from './pages/science/space/Mars';
import Qubit from './pages/science/quantum/Qubit';

// Main Home Component
function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        {/* 헤더 */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            UI Test Project
          </Typography>
          <Typography variant="body1" color="text.secondary">
            16개 UI 요소 테스트 프로젝트
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* 섹션들이 여기에 순차적으로 추가됩니다 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Section 1 */}
          <Section01 />

          {/* Section 2 */}
          <Section02 />

          {/* Section 3 - 여기에 세 번째 섹션이 추가됩니다 */}

          {/* ... 나머지 섹션들 ... */}
        </Box>
      </Box>
    </Container>
  );
}

// App Component with Routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* AI Pages */}
      <Route path="/science/ai/deep-learning" element={<DeepLearning />} />
      <Route path="/science/ai/nlp" element={<DeepLearning />} />
      <Route path="/science/ai/vision" element={<DeepLearning />} />
      <Route path="/science/ai/ethics" element={<DeepLearning />} />

      {/* Space Pages */}
      <Route path="/science/space/mars" element={<Mars />} />
      <Route path="/science/space/blackhole" element={<Mars />} />
      <Route path="/science/space/station" element={<Mars />} />
      <Route path="/science/space/life" element={<Mars />} />

      {/* Quantum Pages - 템플릿으로 Mars 페이지 재사용 */}
      <Route path="/science/quantum/*" element={<Qubit />} />

      {/* Nano Pages */}
      <Route path="/science/nano/*" element={<DeepLearning />} />

      {/* Biotech Pages */}
      <Route path="/science/biotech/*" element={<Mars />} />

      {/* Computing Pages */}
      <Route path="/science/computing/*" element={<DeepLearning />} />
    </Routes>
  );
}

export default App;
