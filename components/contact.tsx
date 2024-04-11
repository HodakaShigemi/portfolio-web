'use client';

import Grid from '@mui/material/Grid';

import Section from './section';
import MailForm from './mail-form';

import ContactArticle from '@/articles/contact.mdx';
import { Stack } from '@mui/material';


const Contact = () => {

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <Section id="contact">
      <h3>Contact</h3>
      <ContactArticle />
      <Stack spacing={3} marginTop={3}>
      {/* <MailForm onSubmit={onSubmit} /> */}
      <MailForm />
      </Stack>
    </Section>
  );
}

export default Contact;
