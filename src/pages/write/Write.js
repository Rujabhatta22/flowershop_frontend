import "./write.css";
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { Form, FormGroup } from "reactstrap";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import blogservice from "../../service/blogservice";

export default function Write() {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const Navigate = useNavigate();
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('photo', file);

    blogservice.addblog(formData)
      .then((response) => {
        console.log(response.data);
        message.success("Your product has been added");
        Navigate("/");
      })
      .catch((err) => {
        message.error("Error occurred");
      });
  };

  return (
    <div className="write">
      <Form className="writeForm" onSubmit={handleSubmit}>
        <FormGroup className="writeFormGroup">
          <input
            type="file"
            placeholder="Image"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </FormGroup>
        <FormGroup className="writeFormGroup">
          <input
            type="text"
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup className="writeFormGroup">
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </FormGroup>
        <button className="writeSubmit" type="submit">
         Publish  </button>
      </Form>
    </div>
  );
}


// import { useContext, useState } from "react";
// import "./write.css";
// import axios from "axios";
// import { Context } from "../../context/Context";

// export default function Write() {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       username: user.username,
//       title,
//       desc,
//     };
//     if (file) {
//       const data =new FormData();
//       const filename = Date.now() + file.name;
//       data.append("name", filename);
//       data.append("file", file);
//       newPost.photo = filename;
//       try {
//         await axios.post("/upload", data);
//       } catch (err) {}
//     }
//     try {
//       const res = await axios.post("/posts", newPost);
//       window.location.replace("/post/" + res.data._id);
//     } catch (err) {}
//   };
//   return (
//     <div className="write">
//       {file && (
//         <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
//       )}
//       <form className="writeForm" onSubmit={handleSubmit}>
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input
//             type="file"
//             id="fileInput"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Title"
//             className="writeInput"
//             autoFocus={true}
//             onChange={e=>setTitle(e.target.value)}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             placeholder="Tell your story..."
//             type="text"
//             className="writeInput writeText"
//             onChange={e=>setDesc(e.target.value)}
//           ></textarea>
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }


// // import "./write.css";
// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useContext } from 'react';
// // import { Context } from '../../context/Context';
// // import { Form, FormGroup, FormFeedback } from "reactstrap";
// // import { message } from "antd";
// // import { useNavigate } from "react-router-dom";
// // import blogservice from "../../service/blogservice";
// // export default function Write() {
// //     const [file, setFile] = useState("")
// //   const [title, setTitle] = useState("")
// //   const [desc, setDesc] = useState("")
// //   const Navigate = useNavigate();

// //   const { user } = useContext(Context)
  
// //   const handleSubmit = (e) => {

// //     e.preventDefault();

// //     const formdata=new FormData();


// //     formdata.append('title',title);

// //     formdata.append('desc', desc);
    
// //     formdata.append('photo',file);

// //     blogservice

// //       .addblog(formdata)

// //       .then((response) => {

// //         console.log(response.data);

// //         message.success("Your product has been added");

// //         Navigate("/")

// //       }).catch((err) => {
// //         message.error(
// //         "err"
// //       )})
  
// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   const newPost = {
// //   //     username: user.username,
// //   //     title,
// //   //     desc,
    

// //   //   };
// //   //   if (file) {
// //   //     const data = new FormData();
// //   //     const filename = Date.now() + file.name;
// //   //     data.append("name", filename)
// //   //     data.append("file", file);
// //   //     newPost.photo = filename;
// //   //     try {
// //   //       await axios.post("/upload", data);
// //   //     } catch (err) { }
// //   //   }
// //   //   try {
// //   //     const res = await axios.post("/posts", newPost);
// //   //     window.location.replace("/post" + res.data._id)
// //   //   }catch (err) {}
// //   };
// //   return (
// //     <div className="write">


// //  <Form>

// //             <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">

// //               <i class="ri-user-line"></i>

// //               <input

// //                 type="file"

// //                 placeholder="Image"

             

// //                 onChange={(e) => setFile(e.target.files[0])}

// //                 required

// //               />

// //             </FormGroup>

// //             <FormGroup className="login__form d-flex align-items-center gap-8 mb-8">

// //               <i class="ri-user-line"></i>

// //               <input

// //                 type="text"

// //                 placeholder="name"

// //                 value={title}

// //                 onChange={(e) => setTitle(e.target.value)}

// //                 required

// //               />

// //             </FormGroup>




// //             <FormGroup className="login__form d-flex align-items-center gap-4 mb-4">

// //               <span>

// //                 <i class="ri-mail-line"></i>

// //               </span>

// //               <input

// //                 type="text"

// //                 placeholder="description"

// //                 value={desc}

// //                 onChange={(e) => setDesc(e.target.value)}

// //                 required

// //               />

// //             </FormGroup>




// //             <button

// //               className="login__btn "

// //               onClick={handleSubmit}

// //               type="submit"

// //             >

// //               Add picture

// //             </button>

// //           </Form>

       

// //       {/* {file &&
// //         <img
// //           className="writeImg"
// //           src={URL.createObjectURL(file)}
// //           alt="blog post"
// //         />
       
// //       }
// //       <form className="writeForm" onSubmit={handleSubmit}>
// //         <div className="writeFormGroup">
// //           <label htmlFor="fileInput">
// //             <i className="writeIcon fas fa-plus"></i>
// //           </label>
// //           <input id="fileInput" type="file" style={{ display: "none" }}
// //             onChange={(e) => setFile(e.target.files[0])} />
// //           <input
// //             className="writeInput"
// //             placeholder="Title"
// //             type="text"
// //             autoFocus={true}
// //             onChange={e => setTitle(e.target.value)}
// //           />
// //         </div>
// //         <div className="writeFormGroup">
// //           <textarea
// //             className="writeInput writeText"
// //             placeholder=" Write something.."
// //             type="text"
// //             autoFocus={true}
// //             onChange={e => setDesc(e.target.value)}
// //           />
// //         </div>
// //         <button className="writeSubmit" type="submit">
// //           Publish
// //         </button>
// //       </form> */}
// //     </div>
// //   );
// // }

