import { PaymentTransaction } from "../models/payment";

export interface PaymentConfirmationDto {
  TransactionType: string;
  TransID: string;
  TransTime: string;
  TransAmount: string;
  BusinessShortCode: string;
  BillRefNumber: string;
  InvoiceNumber: string;
  OrgAccountBalance: string;
  ThirdPartyTransID: string;
  MSISDN: string;
  FirstName: string;
}

enum TransactionStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
}
export default defineEventHandler(async (event) => {
  console.log("** Received Payment **");
  const trans = await readBody(event);
  const payload: PaymentConfirmationDto = trans.payment;
  //   send the payment record to the admin
  const recepientsList = process.env.RECEPIENTS ?? "";
  const recepients = recepientsList.split(",");
  const message = await sendMessage({
    recepients: recepients,
    content: `Payment ${payload.TransID} acknowledged. ${payload.BillRefNumber} utility account will be updated shortly. Indesign Makumbi Park Management.`,
    from: "",
  });
  try {
    const pay = new PaymentTransaction({
      id: payload.TransID,
      amount: payload.TransAmount,
      houseNumber: payload.BillRefNumber,
      phoneNumber: payload.MSISDN,
      date: payload.TransTime,
    });
    const savePayment = await pay.save();
    return { status: 200, data: savePayment, code: TransactionStatus.SUCCESS };
  } catch (e: any) {
    console.log("** An error occured when processing the payment **");
    console.log(e.message);
    return { status: 200, data: null, code: TransactionStatus.ERROR };
  }
});
