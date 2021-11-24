import React, { useState } from 'react';
import GlobalStyles from '../styles/global';
import { Container, Content } from './styles';
import { Upload } from '../components/Upload';
import { FileList } from '../components/FileList';
import { uniqueId, isEmpty } from 'lodash';
import filesize from 'filesize';

export const Home: React.FC = () => { 

    const [uploadedFile, setUploadedFile] = useState([]);

    const handleFiles = (files: any) => {
        const uploaded = files.map((file: any) => ({ 
            file, 
            id: uniqueId(), 
            name: file.name, 
            readableSeize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
         }))

         setUploadedFile(uploadedFile.concat(uploaded));
    };

      return (
        <Container>
            <GlobalStyles />
            <Content>
                <Upload onUpload={files => handleFiles(files)}/>
                {!isEmpty(uploadedFile) && (
                    <FileList />
                )}
            </Content>
        </Container>
    );
};