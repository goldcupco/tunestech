import styled from 'styled-components';
import { font } from '../../styles';

const BaseTitle = styled.h1`
  font-family: ${font.family.main};
  font-weight: ${font.weight.bold};
`;

export const Title = styled(BaseTitle)`
  font-size: ${font.size.lg};
`;

const BaseText = styled.p`
  font-family: ${font.family.main};
  font-weight: ${font.weight.regular};
`;

export const Text = styled(BaseText)`
  font-size: ${font.size.md};
`;

export const TextDescription = styled(BaseText)`
  font-size: ${font.size.md};
`;

export const TextLabel = styled(BaseText)`
  font-size: ${font.size.sm};
`;
