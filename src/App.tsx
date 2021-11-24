import React from 'react';
import GlobalStyles from './styles/global';
import { Container, Content } from './styles';

export const App: React.FC = () => (
    <Container>
        <GlobalStyles />
        <Content>Teste</Content>
    </Container>
);