import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_POST } from "../../env";
import Error from '../Helper/Error'
import { useNavigate } from "react-router-dom";

const UserPhotoPost = () => {
  const name = useForm();
  const pounds = useForm("number");
  const age = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(data) navigate('/user')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("name", name.value);
    formData.append("pounds", pounds.value);
    formData.append("age", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.file[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="text" name="pounds" {...pounds} />
        <Input label="Idade" type="text" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? <Button>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error}/> 
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
