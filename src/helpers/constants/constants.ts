export const ENDPOINTS = Object.freeze({
  API_COMPANIES: 'api/companies',
  API_ORDERS: 'api/orders',
  API_PRODUCTS: 'api/products',
  API_DOCUMENTS: 'api/docs',
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_ID: 'Invalid ID format. The server expects a valid MongoDB ID.',
  INVALID_PHONE: 'The phone number must be 12 digits, without the "+" symbol.',
  INVALID_EMAIL: 'You must enter a valid email.',
  COMPANY_PRODUCTS_NOT_FOUND:
    'Company not found or no products found for this company.',

  PHONE_EMAIL_PROBLEM: `As example problems with email or phone number`,

  ORDERS_HISTORY_NOT_FOUND: 'We didnt find any history for this user.',

  ORDERS_MAKE_ORDER_BAD_REQUEST: 'As example problems with incoming data',

  ISE: 'Internal server error',
});

export const API = Object.freeze({
  TAG_PRODUCTS: 'Products',
  OPERATION_GET_PRODUCTS_BY_ID: 'Get product of the company',

  TAG_COMPANY: 'Company',
  OPERATION_GET_ALL_COMPANIES: 'Get all companies',

  TAG_ORDERS: 'Orders',
  OPERATION_GET_CUSTOMER_ORDERS: 'Get customer orders history',
  OPERATION_POST_CUSTOMER_ORDER: 'Customer make order',
});

export const EXAMPLES = Object.freeze({
  MONGO_ID: '646e0d1395b481438b60b8c8',
  CUSTOMER_PHONE: '380597643354',
  CUSTOMER_EMAIL: 'john@mail.com',
  CUSTOMER_NAME: 'John',
  CUSTOMER_ADRESS: 'Vasilkovskaya 67',

  ORDER_TOTAL_PRICE: 560,

  ORDER_CREATED_AT: '2023-05-24T21:28:44.241Z',
  ORDER_UPDATED_AT: '2023-05-24T21:28:44.241Z',

  PRODUCT_TITLE: 'Mobile Phone',
  PRODUCT_PRICE: 460,
  PRODUCT_DESCRIPTION: 'The most modern mobile phone!',
  PRODUCT_CATEGORY: 'electronics',
  PRODUCT_IMG_LINK: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  PRODUCT_QUANTITY: 4,

  COMPANY_TITLE: 'Jewerly Shop',
  COMPANY_IMG_LINK:
    'https://res.cloudinary.com/dihwu7ikh/image/upload/v1684927602/multi-store-companies/electricity-company_j4zgvy.jpg',
});
