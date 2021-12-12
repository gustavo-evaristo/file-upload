import React, { useState } from "react";
import GlobalStyles from "../styles/global";
import { Container, Content } from "./styles";
import { Upload } from "../components/Upload";
import { FileList } from "../components/FileList";
import { uniqueId, isEmpty } from "lodash";
import filesize from "filesize";
import axios from "axios";

export const Home: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState({});

  const [progress, setProgress] = useState(0);
  const [fileLink, setFileLink] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);

  const processUpload = async (file: any) => {
    setUploadedFile(file);

    const data = new FormData();

    data.append("file", file.file);

    try {
      const response = await axios.post(
        "http://localhost:3333/service/file/create",
        data,
        {
          headers: { "content-type": "multipart/form-data" },

          onUploadProgress: (event) => {
            const progress = Number(
              Math.round((event.loaded * 100) / event.total)
            );

            setProgress(progress);
          },
        }
      );

      setFileLink(response.data.file);
      setFileUploaded(true);
      return true;
    } catch (err) {
      return console.log(err);
    }
  };

  const onDelete = () => setUploadedFile({})


  const handleFile = (file: any) => {
    setProgress(0);
    setFileUploaded(false);
    setFileLink("");

    const uploaded = {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    };
    processUpload(uploaded);
  };

  return (
    <Container>
      <GlobalStyles />
      <Content>
        <Upload onUpload={(file) => handleFile(file[0])} />
        {!isEmpty(uploadedFile) && (
          <FileList
            file={uploadedFile}
            progress={progress}
            fileLink={fileLink}
            fileUploaded={fileUploaded}
            onDelete={onDelete}
          />
        )}
      </Content>
    </Container>
  );
};
