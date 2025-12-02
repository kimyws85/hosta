import { Container, Box, Typography, Card, CardContent, Grid, Chip, LinearProgress } from '@mui/material';
import { Psychology, TrendingUp, Category, Speed } from '@mui/icons-material';

function DeepLearning() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          p: 4,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Psychology sx={{ fontSize: 60, mr: 2 }} />
          <Box>
            <Typography variant="h3" fontWeight="bold">
              딥러닝 기초
            </Typography>
            <Typography variant="h6">
              인공 신경망의 심층 구조
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="AI" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="Machine Learning" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="Neural Networks" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
        </Box>
      </Box>

      {/* 주요 개념 카드 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%)' }}>
            <CardContent>
              <Category sx={{ fontSize: 40, color: 'white', mb: 1 }} />
              <Typography variant="h6" color="white" gutterBottom>
                다층 신경망
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                입력층, 은닉층, 출력층으로 구성된 복잡한 네트워크 구조
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #764ba2 0%, #f093fb 50%)' }}>
            <CardContent>
              <TrendingUp sx={{ fontSize: 40, color: 'white', mb: 1 }} />
              <Typography variant="h6" color="white" gutterBottom>
                역전파 알고리즘
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                오류를 역으로 전파하여 가중치를 최적화하는 학습 방법
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%)' }}>
            <CardContent>
              <Speed sx={{ fontSize: 40, color: 'white', mb: 1 }} />
              <Typography variant="h6" color="white" gutterBottom>
                GPU 가속
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                병렬 처리를 통한 초고속 학습 및 추론
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 주요 내용 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            딥러닝이란?
          </Typography>
          <Typography variant="body1" paragraph>
            딥러닝(Deep Learning)은 인간의 뇌 신경망을 모방한 인공 신경망을 이용하여 데이터의
            복잡한 패턴을 학습하는 머신러닝 기법입니다. '딥(Deep)'이라는 용어는 다층 구조를
            의미하며, 여러 은닉층을 통해 데이터의 고차원적인 특징을 추출합니다.
          </Typography>

          <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mt: 3 }}>
            핵심 구성 요소
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">1. 인공 신경망 (Artificial Neural Network)</Typography>
            <LinearProgress variant="determinate" value={95} sx={{ my: 1, height: 8, borderRadius: 1 }} />
            <Typography variant="body2" color="text.secondary">
              뉴런들이 층(layer)을 이루며 연결된 구조
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">2. 활성화 함수 (Activation Function)</Typography>
            <LinearProgress variant="determinate" value={88} sx={{ my: 1, height: 8, borderRadius: 1 }} />
            <Typography variant="body2" color="text.secondary">
              ReLU, Sigmoid, Tanh 등 비선형성을 도입
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold">3. 최적화 알고리즘</Typography>
            <LinearProgress variant="determinate" value={92} sx={{ my: 1, height: 8, borderRadius: 1 }} />
            <Typography variant="body2" color="text.secondary">
              SGD, Adam, RMSprop 등으로 학습 최적화
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* 실제 응용 분야 */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            실제 응용 분야
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">🖼️ 컴퓨터 비전</Typography>
                <Typography variant="body2">
                  이미지 인식, 객체 탐지, 얼굴 인식, 자율주행
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">💬 자연어 처리</Typography>
                <Typography variant="body2">
                  기계 번역, 감정 분석, 챗봇, 텍스트 생성
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">🎵 음성 인식</Typography>
                <Typography variant="body2">
                  음성 비서, 실시간 번역, 음성 합성
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">🎮 게임 AI</Typography>
                <Typography variant="body2">
                  강화학습, AlphaGo, 게임 캐릭터 지능화
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default DeepLearning;
