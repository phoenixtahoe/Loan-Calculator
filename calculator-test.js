
it('should calculate the monthly rate correctly', function () {
  let test = {amount: 1000, years: 20, rate: 4.5};
  expect(calculateMonthlyPayment(test)).toEqual('6.33');
});

it("should return a result with 2 decimal places", function() {
  let test = {amount: 1000, years: 20, rate: 4.5};
  expect(calculateMonthlyPayment(test)).not.toEqual('6.326');
  expect(calculateMonthlyPayment(test)).toEqual('6.33');
});
