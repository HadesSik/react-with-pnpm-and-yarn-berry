import styled from '@emotion/styled';

interface IFBaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IFBaseLayoutProps) => {
  return (
    <StyledWrapper>
      layout
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default BaseLayout;
