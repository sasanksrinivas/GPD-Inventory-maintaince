package com.api.utils;

public class WebConstant {

	public static final String key = "veggiefridge";
	public static final String INVALID_MEMBER = "InvalidMember";
	public static final String TRUE = "true";
	public static final String FALSE = "false";
	public static final String SHOW_ERROR = "showError";
	public static final String RESULT = "result";
	public static final String SERVER_ERROR = "serverError";

	public static final String EmailSendingError = "EmailSendingError";
	public static final String MobileSmsSendingError = "MobileSmsSendingError";

	public static final String ERROR = "error";
	public static final String NULL = "null";


	public static final String PAID = "Paid";
    public static final String ORDER_PENDING = "Pending";
	public static final String PICKUP_STATUS = "Pending";
    public static final String ORDER_NOT_DELIVERED = "Not Delivered";

	public static final String PICKUPSTATUS = "Delivered";
    public static final String ORDER_INITIATED = "Initiated";
	public static final String OrderCancelDueToUpiFails = "OrderCancelDueToUpiFails";

	// Error Codes
	public static final String NotVfCustomer = "Seems like you are not registered with us !! please create an account first";
	public static final String NotVfMember = "NotVfMember";

	public static final String InValidCustomer = "InvalidCustomer";
	public static final String InValidQrCode = "QrNotValid";
	public static final String InValidOrder = "InvalidOrder";
	public static final String ServerError = "ServerError";

	public static final String DataNotFound = "DataNotFound";

	// Auth Error
	public static final String EmailNotVerified = "Your email is not verified please verify email first";
	public static final String PasswordNotValid = "Please enter valid password";
	public static final String EmailAlreadyExists = "Seems like you are already registered with us !!";

	// Subscription Constants

	// Milk
	public static final int TOTAL_MILK_QUANTITY_TYPE = 7;
 	public static final int QUANTITY_TYPE_1 = 500;
	public static final int QUANTITY_TYPE_2 = 750;
	public static final int QUANTITY_TYPE_3 = 1000;
	public static final int QUANTITY_TYPE_4 = 1250;
	public static final int QUANTITY_TYPE_5 = 1500;
	public static final int QUANTITY_TYPE_6 = 1750;
	public static final int QUANTITY_TYPE_7 = 2000;

	// Estimate Delivery Time
	public static final int TOTAL_ESTIMATE_DELIVERY_TIME_TYPE = 4;
	public static final String ESTIMATE_DELIVERY_TIME_TYPE_1 = "8 AM - 10 AM";
	public static final String ESTIMATE_DELIVERY_TIME_TYPE_2 = "10 AM - 12 PM";
	public static final String ESTIMATE_DELIVERY_TIME_TYPE_3 = "5 PM - 7 PM";
	public static final String ESTIMATE_DELIVERY_TIME_TYPE_4 = "7 PM - 9 PM";

	// Pickup Schedules
	public static final int TOTAL_PICKUP_SCHEDULE_TYPE = 3;
	public static final String PICKUP_SCHEDULE_TYPE_1 = "Daily_7"; // Type_NoOfDays
	public static final String PICKUP_SCHEDULE_TYPE_3 = "Weekends_2";
	public static final String PICKUP_SCHEDULE_TYPE_2 = "Customize Days_-1";

	// Payment Type
	public static final int TOTAL_PAYMENT_TYPE = 2;
	public static final String PAYMENT_TYPE_2 = "Prepaid";
	public static final String PAYMENT_TYPE_1 = "Postpaid";


	public static final String YES = "yes";
	public static final String NO = "no";
	public static final String ID = "id";
	
	public static final String ROLE_USER="ROLE_USER";



	// Simple Date Format
	public static final String SIMPLE_DATE_FORMAT = "dd/MM/yyyy";



    
    public static final String ORDER_PAYMENT_PAY_NOW = "Pay Now";
    public static final String ORDER_PAYMENT_PAY_AT_KIOSK = "Pay at KIOSK";
    public static final String ORDER_PAYMENT_COD = "Cash On Delivery";
    
//    public static final String ADS_IMAGES_PATH = "F:\\Business\\VeggieFridge\\My Veggiefridge Flex Design\\ads\\";
    public static final String ADS_IMAGES_PATH = "/veggiefridge/ads/";
    public static final String PRODUCTS_IMAGES_PATH = "/veggiefridge/products/";

//    public static final String EmailImagePath = "F:/Business/VeggieFridge/mailIMages/"; // Sahil Machine Path
	public static final String EmailImagePath = "/veggiefridge/mailIMages/"; // Server Machine Path
	
	public static final String LogFilePath = "/veggiefridge/vf_api_logs/vf_api.log"; // Server Machine Path
	
	public static final String CREDIT = "CREDIT";

	public static final String NOTIFICATION_PENDING = "Pending";
	public static final String NOTIFICATION_COMPLETED = "Completed";
    
	public static final int REFER_REWARD_AMOUNT = 100;
	public static final String REFER_REWARD_NOTIFICATION_TITTLE = "Earn "+REFER_REWARD_AMOUNT+" Rs";
	public static final String REFER_REWARD_NOTIFICATION_DESCRIPTION = "for your friend signing up.";
	public static final double DEPOSIT_AMOUNT = 500.00;
	
	public static final double COW_1000_ML_PRICE = 55;
	public static final double BUFFALO_1000_ML_PRICE = 65;

	
	public static final String CONTEXT_PATH = "vf-api-1-6";
	public static final Object WALLET_MAXAMOUNT = 500;
	public static Object DEL_BOY_PASSCODE =  2222;

		
	
	
	// Coupons

	public static final String Coupon_OFF = "OFF";
	public static final String Coupon_Discount = "DISCOUNT";
	
	
	
	
}
