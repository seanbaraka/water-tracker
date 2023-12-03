export default defineEventHandler(async (event) => {
  const payments = await PaymentTransaction.find();
  return payments;
});
