import { Container, Box, Typography, Card, CardContent, Grid, Chip, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Rocket, Public, WbSunny, Water, Explore } from '@mui/icons-material';

function Mars() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          p: 4,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rocket sx={{ fontSize: 60, mr: 2 }} />
          <Box>
            <Typography variant="h3" fontWeight="bold">
              화성 탐사
            </Typography>
            <Typography variant="h6">
              붉은 행성의 비밀을 찾아서
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="화성" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="우주 탐사" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="행성 과학" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
        </Box>
      </Box>

      {/* 화성 기본 정보 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 50%)' }}>
            <CardContent>
              <Public sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h4" color="white" fontWeight="bold">
                6,779 km
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                적도 직경
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', background: 'linear-gradient(135deg, #f5576c 0%, #ffa17f 50%)' }}>
            <CardContent>
              <WbSunny sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h4" color="white" fontWeight="bold">
                -63°C
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                평균 기온
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', background: 'linear-gradient(135deg, #ffa17f 0%, #ff6f61 50%)' }}>
            <CardContent>
              <Explore sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h4" color="white" fontWeight="bold">
                687일
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                공전 주기
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ textAlign: 'center', background: 'linear-gradient(135deg, #ff6f61 0%, #de6161 50%)' }}>
            <CardContent>
              <Water sx={{ fontSize: 50, color: 'white' }} />
              <Typography variant="h4" color="white" fontWeight="bold">
                38%
              </Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.9)">
                지구 중력 대비
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 주요 탐사 임무 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            주요 화성 탐사 임무
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#f093fb' }}>
                  <Rocket />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">퍼서비어런스 로버 (2021~)</Typography>}
                secondary="화성 표면 탐사 및 생명체 흔적 조사. 인제뉴어티 헬리콥터와 함께 작동"
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#f5576c' }}>
                  <Rocket />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">큐리오시티 로버 (2012~)</Typography>}
                secondary="게일 크레이터 탐사. 화성의 과거 기후와 환경 연구"
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#ffa17f' }}>
                  <Rocket />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">인사이트 착륙선 (2018-2022)</Typography>}
                secondary="화성 내부 구조 연구. 지진계로 화성 지진 측정"
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: '#ff6f61' }}>
                  <Rocket />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography fontWeight="bold">중국 톈원-1 (2021~)</Typography>}
                secondary="궤도선과 주룽 로버로 화성 표면 탐사"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* 화성 탐사의 중요성 */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            왜 화성을 탐사할까?
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#fff3e0', borderRadius: 2, borderLeft: '4px solid #ff9800' }}>
                <Typography variant="h6" gutterBottom color="#e65100">
                  🌍 제2의 지구 가능성
                </Typography>
                <Typography variant="body1">
                  화성은 태양계에서 지구와 가장 유사한 환경을 가진 행성입니다.
                  과거에는 액체 상태의 물이 존재했을 가능성이 높으며,
                  인류의 미래 거주지로 주목받고 있습니다.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#e8f5e9', borderRadius: 2, borderLeft: '4px solid #4caf50' }}>
                <Typography variant="h6" gutterBottom color="#2e7d32">
                  🔬 생명체 존재 가능성
                </Typography>
                <Typography variant="body1">
                  화성 지하에 미생물이 존재할 가능성이 있습니다.
                  과거 화성에 생명체가 있었다면, 그 흔적을 발견하는 것은
                  우주 생물학의 중대한 발견이 될 것입니다.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#e3f2fd', borderRadius: 2, borderLeft: '4px solid #2196f3' }}>
                <Typography variant="h6" gutterBottom color="#1565c0">
                  🚀 우주 기술 발전
                </Typography>
                <Typography variant="body1">
                  화성 탐사는 로봇 공학, 통신 기술, 생명 유지 시스템 등
                  첨단 기술 발전을 촉진합니다. 이러한 기술은 지구에서도
                  다양하게 활용될 수 있습니다.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#f3e5f5', borderRadius: 2, borderLeft: '4px solid #9c27b0' }}>
                <Typography variant="h6" gutterBottom color="#6a1b9a">
                  🌌 행성 진화 이해
                </Typography>
                <Typography variant="body1">
                  화성 연구를 통해 행성의 형성과 진화 과정을 이해할 수 있습니다.
                  이는 지구의 미래 환경 변화를 예측하는 데도 도움이 됩니다.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Mars;
