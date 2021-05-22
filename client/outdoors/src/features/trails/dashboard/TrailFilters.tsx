// import { Field, Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { Header, Menu } from "semantic-ui-react";

export default function TrailFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="green" content="Filtry" />
        <Menu.Item content="Nazwa">
          {/* <Form>
            <Field as="select" name="TrailName" floted="left">
              <option value="bieszczady">Bieszczady</option>
              <option value="CaminitoDelRey">Caminito del rey</option>
              <option value="tatry">Tatry</option>
              <option value="GoryStolowe">Góry Stołowe</option>
            </Field>
          </Form> */}
        </Menu.Item>
        <Menu.Item content="Kraj">
          {/* <Form>
            <Field as="select" name="TrailCountry" floted="left">
              <option value="poland">Polska</option>
              <option value="spain">Hiszpania</option>
            </Field>
          </Form> */}
        </Menu.Item>
        <Menu.Item content="Trudność"></Menu.Item>
      </Menu>
      <Header />
    </>
  );
}
