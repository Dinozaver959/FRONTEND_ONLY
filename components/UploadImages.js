import React, { useRef } from 'react';
import styles from "../styles/CreateContent.module.css";
import { useForm, useFormContext } from "react-hook-form";
import Moralis from 'moralis'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"; 


const maxFileSize = 200 * 1024; // 200kB for images

const validationSchema = yup.object().shape({
  uploadPreRevealImage : yup
    .mixed()
    .test('name', 'File is required', value => {
      return value[0] && value[0].name !== '';
    })
    .test("fileSize", "Max file size is 200kB", (value) => { 
      return value[0] && value[0].size <= maxFileSize
    })
    .test("type", "An image file type expected", (value) => {
      return value[0] && value[0].type.includes('image');
    })
  ,

  uploadMultipleImages : yup
    .mixed()
    .test('name', 'File is required', value => {
      return value[0] && value[0].name !== '';
    })
    .test("fileSize", "Max file size is 200kB", (value) => { 
      for(let i = 0; i < value.length; i++){
        if(value[i].size > maxFileSize) return false;
      }
      return true;
    })
    .test("type", "An image file type expected", (value) => {
      for(let i = 0; i < value.length; i++){
        if(! value[i].type.includes('image')) return false;
      }
      return true;
    })
  ,

  CollectionName : yup
    .string()
    .required("required")
  ,

  CollectionDescription : yup
    .string()
    .required("required")
})


function UploadImages() {

  const resolver = yupResolver(validationSchema)
  const { register, handleSubmit, formState: { errors } } = useForm({resolver});
  const onSubmit = data => SubmitForm(); 

  async function SubmitForm(){

    // check in DB if collectionName already exists
    const colName= document.getElementById('CollectionName').value;
    const params =  { collectionName: colName };
    if(await Moralis.Cloud.run("DoesCollectionExist", params)){
      document.getElementById('submitFeedback').style.display = 'inline';
      document.getElementById('submitFeedback').innerText = 'collection with this name already exist'
      return;
    }

    // show the feedback text 
    document.getElementById('submitFeedback').style.display = 'inline';
    document.getElementById('submitFeedback').innerText = 'Creating collection...'

    var form = document.querySelector('form');
    var formData = new FormData(form);
    formData.append('UserAccount', (Moralis.User.current()).id);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/api-uploadImages', false);
    xhr.onload = function () {
      // do something to response
      // console.log(this.responseText);

      // update the feedback text 
      document.getElementById('submitFeedback').innerText = 'Collection created'

      // prevent the Submit button to be clickable and functionable
      removeHover()
      document.getElementById('SubmitButton').disabled = true

      // think about also removing the hover effect
      // you can create a seperate class for the hover (can be reused on other elements as well) and just remove the hover class from this element
      console.log("--------------")
    };
    xhr.send(formData);
  }


  // update Submit button
  const refButton = useRef(null);
  function removeHover(){
    const b1 = refButton.current;                 // corresponding DOM node
    b1.className = styles.submitButton_noHover;   // overwrite the style with no hover
  }


  return (
    <> 
      <div> Upload Images</div><br></br>  
        
      <form id="formToSubmit" method="post" action="/api/api-uploadImages" encType="multipart/form-data"  onSubmit={handleSubmit(onSubmit)}>              

        CollectionName: 
        <input id="CollectionName" {...register('CollectionName', { required: true, minLength: 4, maxLength: 24, pattern: /^[a-z][a-z0-9_-]*/i })} ></input>
        {errors.CollectionName && errors.CollectionName.type === "required" && <span><p>required</p></span> }
        {errors.CollectionName && errors.CollectionName.type === "maxLength" && <span><p>Max length is 24 chars</p></span> }
        {errors.CollectionName && errors.CollectionName.type === "minLength" && <span><p>Min length is 4 chars</p></span>}
        {errors.CollectionName && errors.CollectionName.type === "pattern" && <span><p>Start with an alphabet character. No spaces or special characters</p></span> }
        <br></br>

        PreReveal image: 
        <input id="uploadPreRevealImage" type="file"  {...register('uploadPreRevealImage', { required: true})} ></input>  
        {errors.uploadPreRevealImage && errors.uploadPreRevealImage.type === "required" && <span><p>required</p></span> }
        {errors.uploadPreRevealImage && <span><p>{errors.uploadPreRevealImage.message}</p></span>}
        <br></br>

        Collection's images: 
        <input id="uploadMultipleImages" type="file" multiple="multiple" {...register('uploadMultipleImages', { required: true})}></input>      
        {errors.uploadMultipleImages && errors.uploadMultipleImages.type === "required" && <span><p>required</p></span> }
        {errors.uploadMultipleImages && <span><p>{errors.uploadMultipleImages.message}</p></span>}
        <br></br>
        
        Collection's description: 
        <input id="CollectionDescription" width="200" height="80" {...register('CollectionDescription', { required: true, minLength: 4, maxLength: 240})} ></input>
        {errors.CollectionDescription && errors.CollectionDescription.type === "required" && <span><p>required</p></span> }
        {errors.CollectionDescription && errors.CollectionDescription.type === "maxLength" && <span><p>Max length is 240 chars</p></span> }
        {errors.CollectionDescription && errors.CollectionDescription.type === "minLength" && <span><p>Min length is 4 chars</p></span>}
        <br></br>
        <br></br>

        <input id="SubmitButton" className={styles.submitButton} type="submit" value="Submit" ref={refButton} ></input>
      </form>

      <p id="submitFeedback" hidden></p>

    </>
  )
}

export default UploadImages