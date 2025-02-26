import React, { useEffect, useState } from 'react';
import { Typography, Input, Button } from '@material-tailwind/react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';

const FormMeetTeam = () => {
  const [data, setData] = useState([]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('https://676125ef6be7889dc35fea3b.mockapi.io/v1/pet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      setData((prev) => [...prev, result]);
      resetForm(); // Reset form fields
      toast.success('Member added successfully!');
    } catch (error) {
      console.error('Error adding new member:', error);
    }
  };

  return (
    <div>
      <Typography variant="h2" className="text-center mt-8">
        Meet Our Team 🐾
      </Typography>

      <Formik
        initialValues={{ avatar: '', name: '', role: '', bio: '' }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form className="mt-8 max-w-md mx-auto">
            <label htmlFor="avatar">Avatar URL:</label>
            <Field
              as={Input}
              type="text"
              name="avatar"
              value={values.avatar}
              onChange={handleChange}
              placeholder="Avatar URL"
              className="mb-4"
            />
            <label htmlFor="name">Name:</label>
            <Field
              as={Input}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-4"
            />
            <label htmlFor="role">Role:</label>
            <Field
              as={Input}
              type="text"
              name="role"
              value={values.role}
              onChange={handleChange}
              placeholder="Role"
              className="mb-4"
            />
            <label htmlFor="bio">Bio:</label>
            <Field
              as={Input}
              type="text"
              name="bio"
              value={values.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="mb-4"
            />
            <Button type="submit" className="mt-4">Add Team Member</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormMeetTeam;
