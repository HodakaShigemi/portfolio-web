"use server";

import { FormEvent } from "react";

export type State = {
  success: boolean;
  message: string;
};

export async function submitInquiry(
  prevState: State,
  formData: FormData
): Promise<State> {
  console.log(`${formData.get("email")}`);
  console.log(`${formData.getAll}`);
  console.log(`${prevState}`);

  const headers = new Headers([
    ["Content-Type", "application/json"],
    ["Authorization", "Bearer " + process.env.SENDGRID_API_KEY],
  ]);

  const requestBody = {
    personalizations: [
      {
        to: [
          {
            email: formData.get("email"),
          },
        ],
      },
    ],
    subject: "お問い合わせを受け付けました。",
    from: {
      email: "from@example.com",
    },
    content: [
      {
        type: "text/plain",
        value:
          "以下の内容でお問い合わせを受け付けました。\r\n------\r\n" +
          formData.get("subject") +
          "\r\n" +
          formData.get("message"),
      },
    ],
  };

  try {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });
    if (response.ok) {
      return {
        success: true,
        message: "お問い合わせを受け付けました。",
      };
    } else {
      return {
        success: false,
        message: "お問い合わせの送信に失敗しました。",
      };
    }
  } catch (e) {
    return {
      success: false,
      message: "お問い合わせの送信に失敗しました。",
    };
  }
}

//AWS Lambda Handler
// const handler = async (event: any) => {
//   const method = event.requestContext.http.method;
//   if (method !== "POST") {
//     console.log(`caught invalid method: ${method}`);
//     return { statusCode: 405, body: "Method not allowed" };
//   }
//   const requestPayload = JSON.parse(event.body);
//   const formData = new FormData(requestPayload);
//   const response = await submitInquiry({}, formData);
//   return response;
// };

  export const onSubmit = async (
    previousState: State,
    event: FormEvent<HTMLFormElement>
  ):Promise<State> => {
    // event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fetchPromise = fetch("/mail-form", {
      method: "POST",
      body: formData,
    });

    return fetchPromise
      .then((response) => {
        console.log(response.body);
        return response.json();
      })
      .catch((error) => {
        console.error(`request error: ${error}`);
        return {
          success: false,
          message: "申し訳ありません、メッセージの送信に失敗しました",
        };
      });
  };