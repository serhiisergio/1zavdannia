import React, { Component } from "react";
import Button from "../button/Button";
import InputField from "./InputField";
import TextArea from "./TextArea";
import styles from "./InputForm.module.css";

class InputForm extends Component {
  render() {
    return (
      <div className={styles.fields}>
        <form>
          <InputField
            htmlFor="name"
            text="Имя"
            type="text"
            id="name"
            placeholder="Сергій"
          />
          <InputField
            htmlFor="lastName"
            text="Фамилия"
            type="text"
            id="lastName"
            placeholder="Дмітрієв"
          />
          <InputField
            htmlFor="birthday"
            text="Дата рождения"
            type="date"
            id="birthday"
            placeholder="09.08.1900"
          />
          <InputField
            htmlFor="phone"
            text="Телефон"
            type="number"
            id="phone"
            placeholder="+99567536789"
          />
          <InputField
            htmlFor="site"
            text="Сайт"
            type="text"
            id="site"
            placeholder="www.mysite.io"
          />
          <TextArea
            htmlFor="aboutMe"
            text="О себе"
            id="aboutMe"
            name="aboutMe"
            cols="30"
            rows="7"
            placeholder="Напишите о ваших интересах"
          />
          <TextArea
            htmlFor="stack"
            text="Стек технологий"
            id="stack"
            name="stack"
            cols="30"
            rows="7"
            placeholder="Какие технологии вы использовали"
          />
          <TextArea
            htmlFor="project"
            text="Описание последнего проекта"
            id="project"
            name="project"
            cols="30"
            rows="7"
            placeholder="Напишите о чем был ваш последний проект"
          />
          <Button type="button" text="Отмена" />
          <Button type="Submit" text="Сохранить" />
        </form>
      </div>
    );
  }
}

export default InputForm;
