import React from "react";
import { FormEvent, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

// import { submitInquiry, onSubmit, type State } from "./actions";

import { InputTextField, InputSelectField } from "./input-field";

export type SendState = {
  pending: boolean;
  success: boolean;
  resultMessage: string;
};

export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// const MailForm = (props: MailFormProps) => {
const MailForm = () => {
  const [sendState, setSendState] = useState(
    { pending: false, success: false, resultMessage: "" }
    );
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    const dataJson = JSON.stringify(data);
    console.log(`submit_data: ${dataJson}`);
    setSendState({ pending: true, success: false, resultMessage: "" });
    fetch("/api/mail-form", {
      method: "POST",
      body: dataJson,
    })
      .then((res) => res.json())
      .then((data) => {
        setSendState({ pending: false, success: data.success, resultMessage: data.message });
        // setFormState(data);
      })
      .catch((error) => {
        console.error(`request error: ${error}`);
        setSendState({ pending: false, success: false, resultMessage: "申しわけありません。メッセージの送信に失敗しました。" });
      });
  };

  const SubmitButton = () => {
    const { pending } = sendState;
    return (
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        disabled={pending}
        // onClick={handleSubmit}
        sx={{ color: "primary.light" }}
      >
        {pending ? "送信中..." : "送信"}
      </Button>
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submitHandler)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "100%",
        // maxWidth: "800px",
        margin: "auto",
      }}
    >
      <InputTextField
        name="name"
        label="お名前"
        control={control}
      />
      <InputTextField
        name="email"
        label="Eメール"
        control={control}
      />
      <InputSelectField
        name="subject"
        label="お問合わせ種別"
        items={[
          { value: "", display: "選択してください" },
          { value: "consultation", display: "ITシステム相談" },
          { value: "engineering", display: "設計構築依頼" },
          { value: "feedback", display: "HPコンテンツ等へのフィードバック" },
          { value: "interview", display: "取材" },
          { value: "other", display: "その他" },
        ]}
        control={control}
      />
      <InputTextField
        name="message"
        label="お問合せ内容"
        control={control}
        multiline={true}
      />
      <SubmitButton />
      <div
        className={`flex justify-center mt-4 ${
          sendState.success ? "" : "text-red-600"
        }`}
      >
        {sendState.resultMessage}
      </div>
    </Box>
  );
};

export default MailForm;
