import React from 'react';
import GlobalStyles from '../styles/global';
import { Container, Content } from './styles';
import { Upload } from '../components/Upload';

export const Home: React.FC = () => (
    <Container>
        <GlobalStyles />
        <Content>
            <Upload />
        </Content>
    </Container>
);