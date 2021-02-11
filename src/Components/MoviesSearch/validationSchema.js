import * as Yup from 'yup'

export const validationSchema = () => Yup.object().shape({
  movieToSearch: Yup.string()
          .required('Please, write your title')
      })