import Section from './Section';
import { Button, Stack } from '@mui/material';

/**
 * Section 01: 버튼 예제
 * MUI Button 컴포넌트의 다양한 variant와 color 조합
 */
function Section01() {
  return (
    <Section
      title="Section 01: 버튼 아니지롱 (Button)"
      description="MUI Button 컴포넌트의 다양한 스타일과 크기"
    >
      <Stack spacing={2}>
        {/* Contained Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
        </Stack>

        {/* Outlined Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="success">Success</Button>
          <Button variant="outlined" color="error">Error</Button>
        </Stack>

        {/* Text Buttons */}
        <Stack direction="row" spacing={2}>
          <Button variant="text">Default</Button>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="success">Success</Button>
          <Button variant="text" color="error">Error</Button>
        </Stack>

        {/* Sizes */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>
      </Stack>
    </Section>
  );
}

export default Section01;
