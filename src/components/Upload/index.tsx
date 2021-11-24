import React from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export const Upload: React.FC = () => {
    const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
        if (!isDragActive) {
            return <UploadMessage>Arraste os arquivos aqui...</UploadMessage>
        }

        if (isDragReject) {
            return <UploadMessage isError>Arquivo não suportado</UploadMessage>
        }

        return <UploadMessage isSuccess>Solte os arquivos aqui</UploadMessage>
    };

    return (
        <div>
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                        <input {...getInputProps()} />
                        {renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        </div>
    )
};