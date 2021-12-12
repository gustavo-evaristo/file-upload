import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styles";

type Props = {
  file: any;
  progress: number;
  fileLink?: string;
  fileUploaded: boolean;
  onDelete: () => void;
};

export const FileList: React.FC<Props> = ({ file, progress, fileLink, fileUploaded, onDelete}) => {
  return (
    <Container>
        <li>
          <FileInfo>
            <Preview src={file.preview} />
            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readableSize} 
                {!!fileLink && (
                <button onClick={onDelete}>Excluir</button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!fileUploaded && !file.error && (
              <CircularProgressbar
                styles={{ root: { width: 24 }, path: { stroke: "#7159c1" } }}
                strokeWidth={10}
                value={progress}
              />
            )}

            {!!fileLink && (
              <a
                href={fileLink}
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

            {fileUploaded && (
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
    </Container>
  );
};
