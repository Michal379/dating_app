import React, { useState } from "react";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="imageUrl">Profile Image</Label>
        <Input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignInForm;












// import React, { useState } from 'react';

// const Signin = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState([]);

//   function onSubmit(e) {
//     e.preventDefault(); // Prevent default form submission behavior
//     const user = {
//       name,
//       password,
//     };
//     fetch(`/users`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(user),
//     })
//       .then((res) => {
//         if (res.ok) {
//           // Handle successful response here
//           console.log('User created successfully!');
//         } else {
//           res.json().then((e) => setErrors(Object.entries(e.error).flat()));
//         }
//       });
//   }

//   // Here you can add more validation logic to handle form submission
//   // For this example, let's just demonstrate setting errors if the fields are empty
//   const newErrors = [];
//   if (!name) {
//     newErrors.push('Name is required');
//   }
//   if (!password) {
//     newErrors.push('Password is required');
//   }
//   setErrors(newErrors);

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <label>
//           Name
//           <br />
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Password
//           <br />
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <input type="submit" value="Sign up" />
//       </form>
//       {errors && errors.map((error, index) => <p key={index}>{error}</p>)}
//     </>
//   );
// };

// export default Signin;
