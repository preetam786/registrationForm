import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmit: false,
    isEmptyFirstName: false,
    isEmptyLastName: false,
  }

  resetRegistrationForm = () =>
    this.setState({
      firstName: '',
      lastName: '',
      isSubmit: false,
      isEmptyFirstName: false,
      isEmptyLastName: false,
    })

  submitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmit: true})
    } else {
      this.getCheckEmptyField()
    }
  }

  getCheckEmptyField = () => {
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({isEmptyFirstName: true, isEmptyLastName: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({isEmptyFirstName: true})
    } else if (firstName !== '' && lastName === '') {
      this.setState({isEmptyLastName: true})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isEmptyFirstName: true})
    } else {
      this.setState({isEmptyFirstName: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isEmptyLastName: true})
    } else {
      this.setState({isEmptyLastName: false})
    }
  }

  onChangeFirstName = event => this.setState({firstName: event.target.value})

  onChangeLastName = event => this.setState({lastName: event.target.value})

  getRegistrationForm = () => {
    const {isEmptyFirstName, isEmptyLastName} = this.state
    return (
      <form className="registration-form" onSubmit={this.submitForm}>
        <label className="input-label" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="form-input"
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {isEmptyFirstName && <p className="required-text">Required</p>}
        <label className="input-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="form-input"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {isEmptyLastName && <p className="required-text">Required</p>}
        <div className="submit-button-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    )
  }

  getResponseCard = () => (
    <div className="response-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-icon"
        alt="success"
      />
      <p className="response-text">Submitted Successfully</p>
      <button
        type="button"
        className="another-submission-button"
        onClick={this.resetRegistrationForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSubmit} = this.state

    return (
      <div className="registration-form-page">
        <div className="registration-card">
          <h1 className="registration-heading">Registration</h1>
          {isSubmit ? this.getResponseCard() : this.getRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
