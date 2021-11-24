import styled from 'styled-components';

type PropsPreview = {
    src: string;
}

export const Container = styled.ul`
    margin-top: 20px;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        margin: 15px 0;

            div {
                display: flex;
                justify-content: space-around;
            }
        }
`;

export const FileInfo = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    
        span {
        font-size: 12px;
        color: #999;
        margin-top: 5px;

            button {
                border: 0;
                background: transparent;
                color: #e57878;
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }

`;

export const Preview = styled.div`
    width: 36px;
    height: 36px;
    margin-right: 10px;
    border-radius: 5px;
    background-image: url(${(props: PropsPreview) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`;