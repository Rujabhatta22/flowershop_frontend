import React, { useState, useContext } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import blogservice from '../../service/blogservice';
import './write.css';

export default function Write() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(Context);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? URL.createObjectURL(selectedFile) : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('photo', file);
    formData.append('username',user.username)

    blogservice
      .addblog(formData)
      .then((response) => {
        console.log(response.data);
        message.success('Your post has been published successfully');
        navigate('/');
      })
      .catch((err) => {
        message.error('An error occurred while publishing your post');
      });
  };

  return (
    <div className="write-container">
      <div className="write">
        <h2 className="writeTitle">Write a Post</h2>
        <Form className="writeForm" onSubmit={handleSubmit}>
          <FormGroup className="writeFormGroup">
            <label htmlFor="fileInput" className="writeFileLabel">
              <i className="fas fa-plus writeIcon"></i>
              Choose Image
            </label>
            <input
              type="file"
              id="fileInput"
              className="writeFileInput"
              onChange={handleFileChange}
              required
            />
            {file && <img className="writeImage" src={fileName} alt="chosen" />}
          </FormGroup>
          <FormGroup className="writeFormGroup">
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              className="writeTextarea"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            ></textarea>
          </FormGroup>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </Form>
      </div>
    </div>
  );
}
