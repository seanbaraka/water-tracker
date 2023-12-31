import AfricasTalking from "africastalking";

const client = AfricasTalking({
  apiKey: process.env.AT_KEY_ARTEMIS ?? "",
  username: process.env.AT_USERNAME_ARTEMIS ?? "",
});

export interface ATMessage {
  recepients: string | string[];
  content: string;
  from: string;
}

export async function sendMessage(message: ATMessage) {
  try {
    return await client.SMS.send({
      to: message.recepients,
      message: message.content,
      from: "",
      // TODO: Uncomment this once we get the senderId from: 'ARTEMIS',
    });
  } catch (e: any) {
    console.log("Could not send the message", e.message);
  }
}
