import { defineMongooseModel } from "#nuxt/mongoose";

export const PaymentTransaction = defineMongooseModel({
  name: "PaymentTransaction",
  schema: {
    id: { type: "string", required: true, unique: true },
    amount: { type: "string" },
    houseNumber: { type: "string" },
    phoneNumber: { type: "string" },
    date: { type: "string" },
  },
});
