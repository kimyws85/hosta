import { Container, Box, Typography, Card, CardContent, Grid, Chip, Paper } from '@mui/material';
import { Hub, Memory, Lock, TrendingUp } from '@mui/icons-material';

function Qubit() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 헤더 */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          p: 4,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Hub sx={{ fontSize: 60, mr: 2 }} />
          <Box>
            <Typography variant="h3" fontWeight="bold">
              큐비트(Qubit)의 연산과 표현
            </Typography>
            <Typography variant="h6">
              양자 정보가 실제로 어떻게 표현되고, 어떻게 연산되는가
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="양자" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="양자 게이트" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
          <Chip label="선형대수" sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }} />
        </Box>
      </Box>

      {/* 1. 큐비트의 수학적 표현 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            1. 큐비트의 수학적 상태 표현
          </Typography>
          <Typography variant="body1" paragraph>
            큐비트는 단순히 “0과 1의 중첩”이라고만 말하지 않고, 보통 다음과 같이 수학적으로 표현합니다.
          </Typography>
          <Paper sx={{ p: 3, mb: 3, background: '#f5f5f5' }}>
            <Typography variant="body1">
              |ψ⟩ = α|0⟩ + β|1⟩
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              여기서 α, β는 복소수 계수이며, |α|² + |β|² = 1 을 만족합니다.
            </Typography>
          </Paper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  확률 해석
                </Typography>
                <Typography variant="body2">
                  • |α|²: 측정 시 0이 나올 확률<br />
                  • |β|²: 측정 시 1이 나올 확률
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  위상(Phase)
                </Typography>
                <Typography variant="body2">
                  계수 α, β는 크기뿐 아니라 위상(각도)을 가지며,  
                  위상 차이가 간섭(interference)에 중요한 역할을 합니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  벡터 표현
                </Typography>
                <Typography variant="body2">
                  |0⟩ = [1, 0]ᵀ, |1⟩ = [0, 1]ᵀ 로 두고,<br />
                  |ψ⟩ = [α, β]ᵀ 벡터로 표현하여 선형대수로 다룹니다.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 2. 기본 단일 큐비트 게이트 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            2. 단일 큐비트 양자 게이트
          </Typography>
          <Typography variant="body1" paragraph>
            양자 게이트는 큐비트 상태 벡터에 작용하는 **단위행렬(Unitary Matrix)** 입니다.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                <Memory sx={{ fontSize: 36, mb: 1 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  X 게이트 (NOT)
                </Typography>
                <Typography variant="body2">
                  |0⟩ ↔ |1⟩ 를 서로 뒤바꾸는 연산.<br />
                  고전 논리의 NOT과 유사한 역할.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
                <Hub sx={{ fontSize: 36, mb: 1 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  H 게이트 (Hadamard)
                </Typography>
                <Typography variant="body2">
                  |0⟩ → (|0⟩ + |1⟩)/√2,<br />
                  |1⟩ → (|0⟩ - |1⟩)/√2 로 보내  
                  **균등 중첩 상태**를 만들어 냅니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white' }}>
                <Lock sx={{ fontSize: 36, mb: 1 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Z 게이트
                </Typography>
                <Typography variant="body2">
                  |0⟩ 는 그대로 두고,<br />
                  |1⟩ 에 –1의 위상을 곱해 위상만 변환합니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, height: '100%', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white' }}>
                <TrendingUp sx={{ fontSize: 36, mb: 1 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  위상 게이트(Phase)
                </Typography>
                <Typography variant="body2">
                  상태의 크기는 그대로 두고,  
                  특정 상태에 위상을 부여하여  
                  간섭 효과를 조절하는 데 사용됩니다.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 3. 얽힘 생성과 다중 큐비트 */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            3. 다중 큐비트와 얽힘 상태 생성
          </Typography>
          <Typography variant="body1" paragraph>
            두 개 이상의 큐비트를 사용하면, 단순한 곱 상태를 넘어서 **얽힘(Entanglement)** 을 만들 수 있습니다.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Paper sx={{ p: 3, background: '#f5f5f5', height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  대표적인 얽힘 상태: Bell 상태
                </Typography>
                <Typography variant="body1" paragraph>
                  |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
                </Typography>
                <Typography variant="body2" paragraph>
                  한 큐비트를 측정하면 즉시 다른 큐비트의 결과도 결정되는 특별한 상관관계를 가집니다.
                  이는 고전 확률로는 표현하기 어려운 양자 상관관계입니다.
                </Typography>
                <Typography variant="body2">
                  H 게이트와 CNOT 게이트를 조합하면, 간단한 회로로 이러한 얽힘 상태를 생성할 수 있습니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  ⚛️⚛️
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  얽힘 = 단순한 “연결”이 아님
                </Typography>
                <Typography variant="body2">
                  두 큐비트의 상태 전체를 하나의 시스템으로 보아야 하며,  
                  부분만 보면 정보를 완전히 이해할 수 없습니다.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 4. 큐비트 연산의 실제 응용 */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom fontWeight="bold">
            4. 큐비트 연산이 사용되는 대표 응용
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  양자 검색 알고리즘 (Grover)
                </Typography>
                <Typography variant="body2">
                  H 게이트와 위상 반전 연산을 반복해,  
                  원하는 해의 확률만 증폭시키는 알고리즘입니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  양자 소인수분해 (Shor)
                </Typography>
                <Typography variant="body2">
                  위상 추정과 양자 푸리에 변환(QFT)을 활용해,  
                  고전적으로 어려운 소인수분해 문제를  
                  훨씬 빠르게 풀 수 있는 이론적 기반을 제공합니다.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  양자 시뮬레이션
                </Typography>
                <Typography variant="body2">
                  다른 양자 시스템(분자, 물질)을 큐비트로 모사하여,  
                  신약 개발, 신소재 연구 등에서  
                  고전 컴퓨터로는 어려운 계산을 효율적으로 수행하려는 시도에 사용됩니다.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Qubit;
