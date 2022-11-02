import styled from '@emotion/styled';

const PlaceholderText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.06em;
  color: #7a7d82;
`;

interface PlaceholderProps {
  children: React.ReactNode;
}

const CustomPlaceholder = ({ children }: PlaceholderProps) => (
  <PlaceholderText className="custom-placeholder">{children}</PlaceholderText>
);

export default CustomPlaceholder;
