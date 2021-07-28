import * as React from "react";
import Box from "@material-ui/core/Box";
import { TextField, Button, Typography } from "@material-ui/core";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Axios from 'axios';

const LoginForm = ({setIsLogin}) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: 
        Yup.string()
        .max(50, 'El correo debe tener menos de 15 caracteres')
        .required(),
      password: 
        Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required()
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      Axios.post('https://reqres.in/api/login',{
        email: values.email,
        password: values.password,
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      // setIsLogin(true)
    }
  })


  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        bgcolor: "primary.dark"
      }}
    >
      <form 
      onSubmit={formik.handleSubmit} 
      style={{
        width: 300,
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",}} 
        >
          <Typography variant="h6">Login</Typography>
      <TextField
        id="email"
        label="Correo"
        variant="outlined"
        type="email"
        sx={{m:1}}
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email 
        ? <div>{formik.errors.email}</div> 
        : null}
      <TextField
        id="password"
        label="Contraseña"
        variant="outlined"
        type="password"
        sx={{m:1}}
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password 
        ? <div>{formik.errors.password}</div> 
        : null}
      <Button variant="contained" type='submit'>ENTRAR</Button>
      </form>
      {/* 
      
      
      <Button variant="contained">ENTRAR</Button> */}
    </Box>
  );
};

export default LoginForm;


// import * as React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import Box from "@material-ui/core/Box";
// import { TextField, Button, Typography } from "@material-ui/core";

// const LoginForm = () => {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         // bgcolor: "primary.dark",
//         // display: "flex",
//         // alignItems: "center",
//         // justifyContent: "center",
//         // flexDirection: "column",
//       }}
//     >
//       {/* <Typography variant="h6">Login</Typography>
//       <TextField
//         id="outlined-basic"
//         label="Correo"
//         variant="outlined"
//         type="email"
//         sx={{m:1}}
//       />
//       <TextField
//         id="outlined-basic"
//         label="Contraseña"
//         variant="outlined"
//         type="password"
//         sx={{m:1}}
//       />
//       <Button variant="contained">ENTRAR</Button> */}
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email("Invalid email address")
//             .required("Required"),
//           password: Yup.string()
//             .min(8, "Must be 8 characters or more")
//             .required("Required"),
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {(formik) => (
//           <form onSubmit={formik.handleSubmit} style={{
//             width: 300,
//             height: 300,
//             bgcolor: "primary.dark",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//           }}>
//             <Typography variant="h6">Login</Typography>
//             <TextField
//               id="email"
//               label="Correo"
//               variant="outlined"
//               type="email"
//               sx={{ m: 1 }}
//               {...formik.getFieldProps("email")}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div>{formik.errors.email}</div>
//             ) : null}
//             <TextField
//               id="password"
//               label="Contraseña"
//               variant="outlined"
//               type="password"
//               sx={{ m: 1 }}
//               {...formik.getFieldProps("password")}
//             />
//             {formik.touched.password && formik.errors.password ? (
//               <div>{formik.errors.password}</div>
//             ) : null}

//             {/* <button type="submit">Submit</button> */}
//             <Button variant="contained" type="submit">
//               ENTRAR
//             </Button>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default LoginForm;