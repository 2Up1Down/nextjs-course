import Head from "next/head";
import React from "react";
import ContactForm from "./../components/contact/contact-form";

function ContactPage(props) {
  return (
    <div>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your messages." />
      </Head>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
