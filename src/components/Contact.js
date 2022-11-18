import React from 'react'
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react"
import Swal from "sweetalert2";
import Header from './Header'
import Footer from './Footer'
import './contact.css'

const SERVICE_ID = "service_bg8ad5q";
const TEMPLATE_ID = "template_goxfgyd";
const USER_ID = "AQFQl106aXCoMWxJx";

export default function Contact() {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="contact">
        <Header />
        <div className="formPageElements">
        <div className="formLeft">
          <h4>For inquiries about the game, partnerships, or other business matters, please use the form.</h4>
          <img src="https://media.istockphoto.com/id/177444800/photo/plain-brown-egg-standing-on-white-surface.jpg?s=612x612&w=0&k=20&c=JqJ1Hq-rb9k80B8t_q6O_GZfO-5gO81ZLmtoZeGPyBw=" alt="brown egg" />
        </div>
        <div className="formRight">
        <Form id="form" onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" id="formButton">Submit</Button>
        </Form>
        </div>
        </div>
        <Footer />
    </div>
  )
}