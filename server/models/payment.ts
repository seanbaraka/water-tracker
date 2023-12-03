import { defineMongooseModel } from "#nuxt/mongoose";

export const PaymentTransaction = defineMongooseModel({
  name: "PaymentTransaction",
  schema: {
    id: { type: "string" },
    amount: { type: "string" },
    houseNumber: { type: "string" },
    phoneNumber: { type: "string" },
    date: { type: "string" },
  },
});
