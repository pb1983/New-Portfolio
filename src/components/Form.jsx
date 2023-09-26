import React, { useState } from 'react';

export default function Form() {
    const [formInput, setFormInput] = useState({
        username: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const validationErrors = { ...errors };

        if (!value.trim()) {
            validationErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            validationErrors[name] = 'Email is not valid';
        } else {
            delete validationErrors[name];
        }

        setErrors(validationErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formInput.username.trim()) {
            validationErrors.username = 'Username is required';
        }

        if (!formInput.email.trim()) {
            validationErrors.email = 'Email is required';
        } 

        if (!formInput.message.trim()) {
            validationErrors.message = 'Message is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setFormInput({
                username: '',
                email: '',
                message: ''
            });
        }
    };

    return (<div className="col-4">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="username"
                    placeholder="name"
                    value={formInput.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <p className="text-danger">
                    {errors.username}
                </p>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    placeholder="name@example.com"
                    value={formInput.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <p className="text-danger">
                    {errors.email}
                </p>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    placeholder="Enter your message"
                    value={formInput.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                ></textarea>
                <p className="text-danger">
                    {errors.message}
                </p>
            </div>
            <div>
                <button type="submit" className="btn btn-dark">
                    Submit
                </button>
            </div>
        </form>
    </div>
    );
}