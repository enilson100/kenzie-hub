import * as yup from "yup";

const schema = yup.object({
  status: yup.string().required("Status obrigatório"),
});

export default schema;
