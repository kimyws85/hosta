import { Box, Typography, Paper } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * 섹션 래퍼 컴포넌트
 * 각 UI 요소를 담는 공통 레이아웃
 */
function Section({ title, description, children }) {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      {/* 섹션 헤더 */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </Box>

      {/* 섹션 콘텐츠 */}
      <Box>
        {children}
      </Box>
    </Paper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  description: '',
  children: null,
};

export default Section;
