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
  const payload = await readBody<PaymentConfirmationDto>(event);
  console.log(payload);
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
