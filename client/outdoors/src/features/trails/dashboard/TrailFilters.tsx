// import { Field, Form, FormikProvider, useFormik } from "formik";
import { observer } from "mobx-react-lite";
import React from "react";
import { Dropdown, DropdownItemProps, Header, Menu } from "semantic-ui-react";
import { Trail } from "../../../app/models/trail";
import { useStore } from "../../../app/stores/store";

export default observer(function TrailFilters() {
  const { trailStore } = useStore();
  let trailOptions: DropdownItemProps[] = [];
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="green" content="Filtry" />
        <Menu.Item>
          <Header content="Nazwa" />
          <Dropdown
            fluid
            selection
            search
            placeholder="Wybierz Nazwę"
            options={trailOptions}
          />
        </Menu.Item>
        <Menu.Item>
          <Header content="Kraj" />
          <Dropdown
            fluid
            selection
            search
            placeholder="Wybierz kraj"
            options={trailOptions}
          />
        </Menu.Item>
        <Menu.Item>
          <Header content="Trudność" />
          <Dropdown
            fluid
            selection
            placeholder="Wybierz trudność"
            options={trailOptions}
          />
        </Menu.Item>
      </Menu>
      <Header />
    </>
  );
});
