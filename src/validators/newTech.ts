import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required("Tecnologia é obrigatório"),
  status: yup.string().required("Status obrigatório"),
});

export default schema;
