interface UserResponse {
  id: number;
  name: string;
  age: number;
  paymentMethod: {
    name: string;
  };
  addresses: number[];
};

type PaymentMethodName = UserResponse['paymentMethod']['name'];
type FirstAddress = UserResponse['addresses'][0];
