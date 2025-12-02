import { Container, Box, Typography, Card, CardContent, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Science, Healing, BatteryChargingFull, FilterVintage, WaterDrop, Build } from '@mui/icons-material';

function Particle() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
          color: 'white',
          p: 4,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Science sx={{ fontSize: 60, mr: 2 }} />
          <Box>
            <Typography variant="h3" fontWeight="bold">
              나노 입자 (Nanoparticle)
            </Typography>
            <Typography variant="h6">
              1~100nm 크기의 극미세 물질
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="나노미터" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="표면적" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="양자효과" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
        </Box>
      </Box>

      {/* 나노 스케일 비교 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            나노 스케일의 이해
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, background: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h3" color="primary" fontWeight="bold">1 nm</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  = 10<sup>-9</sup> 미터
                </Typography>
                <Typography variant="caption">
                  머리카락 직경의 1/100,000
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, background: '#f3e5f5', borderRadius: 2 }}>
                <Typography variant="h3" color="secondary" fontWeight="bold">DNA</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  폭: 약 2 nm
                </Typography>
                <Typography variant="caption">
                  생명의 기본 구조
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, background: '#e8f5e9', borderRadius: 2 }}>
                <Typography variant="h3" sx={{ color: '#4caf50' }} fontWeight="bold">바이러스</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  크기: 20-400 nm
                </Typography>
                <Typography variant="caption">
                  나노 크기의 생물체
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center', p: 2, background: '#fff3e0', borderRadius: 2 }}>
                <Typography variant="h3" sx={{ color: '#ff9800' }} fontWeight="bold">세포</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  크기: 10,000 nm 이상
                </Typography>
                <Typography variant="caption">
                  나노 입자보다 훨씬 큼
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 나노 입자의 종류 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            주요 나노 입자 종류
          </Typography>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)', color: 'white', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    🥇 금 나노 입자 (Gold Nanoparticles)
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="• 독특한 광학적 성질 (표면 플라즈몬 공명)" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 의료 진단 및 약물 전달" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 크기에 따라 색상 변화 (적색~청색)" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    ⚫ 탄소 나노튜브 (Carbon Nanotubes)
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="• 강철보다 100배 강함" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 뛰어난 전기 전도성" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 전자기기, 복합재료에 활용" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    💎 양자점 (Quantum Dots)
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="• 반도체 나노 결정" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 크기로 발광 색상 조절 가능" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 디스플레이, 바이오이미징" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white', height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    🧲 자성 나노 입자 (Magnetic Nanoparticles)
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="• 자기장에 반응" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• MRI 조영제, 약물 타겟팅" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="• 데이터 저장 장치" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 응용 분야 */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            나노 입자 응용 분야
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Healing sx={{ color: '#e91e63', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">의료 분야</Typography>}
                    secondary="표적 약물 전달, 암 치료, 진단"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <BatteryChargingFull sx={{ color: '#4caf50', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">에너지</Typography>}
                    secondary="태양전지, 배터리, 촉매"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FilterVintage sx={{ color: '#9c27b0', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">환경</Typography>}
                    secondary="수질 정화, 대기 오염 제거"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <WaterDrop sx={{ color: '#2196f3', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">화장품</Typography>}
                    secondary="자외선 차단, 피부 침투"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Build sx={{ color: '#ff9800', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">재료 공학</Typography>}
                    secondary="초강력 복합재, 코팅"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Science sx={{ color: '#00bcd4', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography fontWeight="bold">전자기기</Typography>}
                    secondary="디스플레이, 센서, 메모리"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Particle;
