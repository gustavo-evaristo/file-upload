import React from "react";
import {CircularProgressbar}  from 'react-circular-progressbar';
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

export const FileList: React.FC = () => {
    return (
        <Container>
            <li>
                <FileInfo>
                    <Preview src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <div>
                        <strong>Imagem.png</strong>
                        <span>84kb <button onClick={() => {}}>Excluir</button></span>
                    </div>
                </FileInfo>

                <div>
                    <CircularProgressbar 
                        styles={{ root: { width: 24 }, path: { stroke: '#7159c1' } }} 
                        strokeWidth={10}
                        value={60}
                    />

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdLink style={{ marginRight: 8, marginLeft: 8 }} size={24} color='#222' />
                    </a>

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdCheckCircle style={{ marginRight: 8 }} size={24} color='#78e5d5' />
                    </a>

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdError style={{ marginRight: 8 }} size={24} color='#e57878' />
                    </a>
                </div>
            </li>
            <li>
                <FileInfo>
                    <Preview src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <div>
                        <strong>Imagem.png</strong>
                        <span>84kb <button onClick={() => {}}>Excluir</button></span>
                    </div>
                </FileInfo>

                <div>
                    <CircularProgressbar 
                        styles={{ root: { width: 24 }, path: { stroke: '#7159c1' } }} 
                        strokeWidth={10}
                        value={60}
                    />

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdLink style={{ marginRight: 8, marginLeft: 8 }} size={24} color='#222' />
                    </a>

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdCheckCircle style={{ marginRight: 8 }} size={24} color='#78e5d5' />
                    </a>

                    <a 
                        href='https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg' target='_blank'
                        rel='noopener noreferrer'>
                            <MdError style={{ marginRight: 8 }} size={24} color='#e57878' />
                    </a>
                </div>
            </li>
        </Container>
    );
}