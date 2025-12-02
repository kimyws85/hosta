import { useState } from 'react';
import Section from './Section';
import { Card, CardContent, Typography, Grid, Menu, MenuItem, Box, Chip } from '@mui/material';
import {
  Psychology,
  Rocket,
  Science,
  Biotech,
  Computer,
  Hub
} from '@mui/icons-material';

/**
 * Section 02: 첨단 과학 기술 포털
 * 클릭 시 세부 메뉴가 나타나고 새 창으로 상세 페이지 열기
 */
function Section02() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCardClick = (event, topic) => {
    setAnchorEl(event.currentTarget);
    setSelectedTopic(topic);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTopic(null);
  };

  const handleMenuItemClick = (path) => {
    window.open(path, '_blank');
    handleClose();
  };

  // 과학 기술 주제 데이터
  const topics = [
    {
      id: 'ai',
      title: 'AI & 머신러닝',
      icon: <Psychology sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: '인공지능의 미래',
      subMenus: [
        { name: '딥러닝 기초', path: '/science/ai/deep-learning' },
        { name: '자연어 처리', path: '/science/ai/nlp' },
        { name: '컴퓨터 비전', path: '/science/ai/vision' },
        { name: 'AI 윤리', path: '/science/ai/ethics' },
      ]
    },
    {
      id: 'space',
      title: '우주 탐사',
      icon: <Rocket sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: '우주의 신비를 탐험',
      subMenus: [
        { name: '화성 탐사', path: '/science/space/mars' },
        { name: '블랙홀 연구', path: '/science/space/blackhole' },
        { name: '우주 정거장', path: '/science/space/station' },
        { name: '외계 생명체', path: '/science/space/life' },
      ]
    },
    {
      id: 'quantum',
      title: '양자 역학의 신비',
      icon: <Hub sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: '양자역학의 혁명',
      subMenus: [
        { name: '양자 비트', path: '/science/quantum/Qubit' },
        { name: '양자 얽힘', path: '/science/quantum/entanglement' },
        { name: '양자 암호', path: '/science/quantum/crypto' },
        { name: '양자 알고리즘', path: '/science/quantum/algorithm' },
      ]
    },
    {
      id: 'nano',
      title: '나노 기술',
      icon: <Science sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: '극미세 세계의 기술',
      subMenus: [
        { name: '나노 입자', path: '/science/nano/particle' },
        { name: '나노 의료', path: '/science/nano/medical' },
        { name: '나노 소재', path: '/science/nano/material' },
        { name: '나노 센서', path: '/science/nano/sensor' },
      ]
    },
    {
      id: 'biotech',
      title: '생명 공학',
      icon: <Biotech sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: '생명의 비밀을 풀다',
      subMenus: [
        { name: '유전자 편집', path: '/science/biotech/gene-editing' },
        { name: '줄기세포', path: '/science/biotech/stem-cell' },
        { name: '합성 생물학', path: '/science/biotech/synthetic' },
        { name: '바이오 센서', path: '/science/biotech/sensor' },
      ]
    },
    {
      id: 'computing',
      title: '슈퍼컴퓨팅',
      icon: <Computer sx={{ fontSize: 50 }} />,
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      description: '초고성능 컴퓨팅',
      subMenus: [
        { name: '엑사스케일', path: '/science/computing/exascale' },
        { name: '병렬 처리', path: '/science/computing/parallel' },
        { name: '기후 모델링', path: '/science/computing/climate' },
        { name: 'AI 슈퍼컴퓨터', path: '/science/computing/ai-super' },
      ]
    },
  ];

  return (
    <Section
      title="Section 02: 첨단 과학 기술 포털"
      description="각 카드를 클릭하면 세부 주제를 탐색할 수 있습니다"
    >
      <Grid container spacing={3}>
        {topics.map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.id}>
            <Card
              sx={{
                background: topic.color,
                color: 'white',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                },
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
              onClick={(e) => handleCardClick(e, topic)}
            >
              {/* 배경 패턴 */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  opacity: 0.2,
                }}
              >
                {topic.icon}
              </Box>

              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 2 }}>
                  {topic.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {topic.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {topic.description}
                </Typography>
                <Chip
                  label={`${topic.subMenus.length}개 주제`}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 세부 메뉴 */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 250,
            background: selectedTopic ? selectedTopic.color : 'white',
            color: 'white',
          }
        }}
      >
        {selectedTopic && (
          <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <Typography variant="h6" fontWeight="bold">
              {selectedTopic.title}
            </Typography>
            <Typography variant="caption">
              세부 주제를 선택하세요
            </Typography>
          </Box>
        )}
        {selectedTopic?.subMenus.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(item.path)}
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <Typography>{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Section>
  );
}

export default Section02;
