import BlogLayout from 'src/layouts/BlogLayout'
import { Form, TextField, TextAreaField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <TextField name="name" />
        <label htmlFor="email">Email</label>
        <TextField name="email" />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
