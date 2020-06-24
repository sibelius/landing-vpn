import styled from 'styled-components';
import { Text } from 'rebass';
import { color, space, typography } from 'styled-system';

export const Regular = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 400;
  ${space}
  ${color}
  ${typography}
`;
export const Medium = styled(Text).attrs({
  as: 'span'
})`
  font-weight: 500;
  ${space}
  ${color}
  ${typography}
`;
export const Bold = styled(Text).attrs({
  as: 'span'
})`
  font-weight: bold;
  ${space}
  ${color}
  ${typography}
`;