// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from 'react'
import styled from 'styled-components'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <Form>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xbjzorvo"
          method="POST"
        >
          <label htmlFor="name">
            <span className="visually-hidden">Your Name:</span>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </label>
          <label htmlFor="email">
            <span className="visually-hidden">Your Email:</span>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>
          <label htmlFor="message">
            <span className="visually-hidden">Message:</span>
            <textarea id="message" name="textarea" />
          </label>
          {status === 'SUCCESS' ? (
            <div className="Form_Success_Message">Thanks You!</div>
          ) : (
            <button>Submit</button>
          )}
          {status === 'ERROR' && (
            <div className="Form_Error_Message">Ooops! There was an error.</div>
          )}
        </form>
      </Form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}

const Form = styled.div`
  label {
    color: #ccc;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 2rem;
    padding: 2rem 1rem;
    font-size: 1.8rem;
    color: var(--grey-1);
    border: 1px solid var(--white-2);
    transition: 0.5s all;

    &:focus {
      box-shadow: 0 20px 50px 0 rgba(45, 65, 90, 0.1);
    }

    &::placeholder {
      color: var(--grey-1);
    }
  }

  textarea {
    display: block;
    width: 100%;
    min-height: 12rem;
    margin-bottom: 2rem;
    padding: 2rem 1rem;
    border: 1px solid #ccc;
    font-size: 1.8rem;
    border: 1px solid var(--white-2);
    color: var(--grey-1);
    font-family: inherit;
    font-size: inherit;
    transition: 0.5s all;

    &:focus {
      box-shadow: 0 20px 50px 0 rgba(45, 65, 90, 0.1);
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 2rem 1rem;
    border: 2px solid var(--yellow);
    font-size: 1.8rem;
    font-weight: 400;
    color: #666;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      background-color: var(--yellow);
      box-shadow: 0 20px 50px 0 rgba(45, 65, 90, 0.1);
    }
  }

  .Form_Success_Message {
    padding: 2rem;
    border: 1px solid #32a852;
    font-size: 1.8rem;
    color: #32a852;
  }

  .Form_Error_Message {
    padding: 2rem 1rem;
    border: 1px solid #a83232;
    font-size: 1.8rem;
    color: #a83232;
  }
`
