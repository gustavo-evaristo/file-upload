import React from 'react';
import GlobalStyles from '../styles/global';
import { Container, Content } from './styles';
import { Upload } from '../components/Upload';
import { FileList } from '../components/FileList';

export const Home: React.FC = () => (
    <Container>
        <GlobalStyles />
        <Content>
            <Upload />
            <FileList />
        </Content>
    </Container>
);