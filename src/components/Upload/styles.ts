import styled, { css } from 'styled-components';
import { ifStyle } from '@platformbuilders/helpers'

type PropsContainer = {
    isDragActive?: boolean;
    isDragReject?: boolean;
}

type ProspUploadMessage = {
    isError?: boolean;
    isSuccess?: boolean;
}

const isError = ifStyle('isError');
const isSuccess = ifStyle('isSuccess');

const dragActive = css`
    border-Color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: 'dropzone',
})<PropsContainer>`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;

    transition: height 0.2s ease;

    ${props => props.isDragActive && dragActive};
    ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p<ProspUploadMessage>`
    display: flex;
    color: ${isError('#e57878', isSuccess('#78e5d5', '#999'))};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
`;