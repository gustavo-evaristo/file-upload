import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

type Props = {
  files: any[];
};

export const FileList: React.FC<Props> = ({ files }) => {
    console.log(files);
  return (
    <Container>
      {files.map((file) => (
        <li key={file.id}>
          <FileInfo>
            <Preview src={file.preview} />
            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readableSize} 
                {!!file.url && (
                <button onClick={() => {}}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
                strokeWidth={10}
                value={file.progress}
              />
            )}

            {file.url && (
              <a
                href="https://s2.best-wallpaper.net/wallpaper/3840x2160/1904/Superhero-Spider-Man_3840x2160.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink
                  style={{ marginRight: 8, marginLeft: 8 }}
                  size={24}
                  color="#222"
                />
              </a>
            )}

            {file.uploaded && (
              <MdCheckCircle
                style={{ marginRight: 8 }}
                size={24}
                color="#78e5d5"
              />
            )}

            {file.error && (
              <MdError style={{ marginRight: 8 }} size={24} color="#e57878" />
            )}
          </div>
        </li>
      ))}
    </Container>
  );
};
