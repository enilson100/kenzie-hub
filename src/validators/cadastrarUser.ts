import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "No mínimo 8 caracteres"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação tem quer ser igual a senha")
    .required("Confirmação de senha obrigatório"),
  bio: yup
    .string()
    .required("Bio obrigatória")
    .min(10, "No mínimo 10 caracteres"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string().required("Modúlo é obrigatório"),
});

export default schema;
