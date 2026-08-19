<?php 
include_once __DIR__.'/pg_helper.php';

// Define environment variable
define('PG_REQUEST_URL', 'https://dashboard.payvang.com/v1/jsp/paymentInit');
define('PG_RESPONSE_URL', 'https://dashboard.payvang.com/v1/jsp/response.jsp');
define('PG_RESPONSE_MODE', 'SALE');
define('PG_SALT', '3f52445a3c8448d6');
define('PG_APP_ID', '1000230807121449');

$pg_transaction = new PCGModule;
$pg_transaction->setAppId($_REQUEST['APP_ID']);
$pg_transaction->setPgRequestUrl(PG_REQUEST_URL);
$pg_transaction->setSalt($_REQUEST['SALT']);
$pg_transaction->setReturnUrl($_REQUEST['RETURN_URL']);
$pg_transaction->setCurrencyCode(356);
$pg_transaction->setTxnType('SALE');
$pg_transaction->setOrderId($_REQUEST['ORDER_ID']);
@$pg_transaction->setCustEmail($_REQUEST['CUST_EMAIL']);
@$pg_transaction->setCustName($_REQUEST['CUST_NAME']);
@$pg_transaction->setCustStreetAddress1($_REQUEST['CUST_STREET_ADDRESS1']);
@$pg_transaction->setCustCity($_REQUEST['CUST_CITY']);
@$pg_transaction->setCustState($_REQUEST['CUST_STATE']);
@$pg_transaction->setCustCountry($_REQUEST['CUST_COUNTRY']);
@$pg_transaction->setCustZip($_REQUEST['CUST_ZIP']);
@$pg_transaction->setCustPhone($_REQUEST['CUST_PHONE']);
@$pg_transaction->setAmount($_REQUEST['AMOUNT']*100); // convert to Rupee from Paisa
@$pg_transaction->setProductDesc($_REQUEST['PRODUCT_DESC']);
@$pg_transaction->setCustShipStreetAddress1($_REQUEST['CUST_SHIP_STREET_ADDRESS1']);
@$pg_transaction->setCustShipCity($_REQUEST['CUST_SHIP_CITY']);
@$pg_transaction->setCustShipState($_REQUEST['CUST_SHIP_STATE']);
@$pg_transaction->setCustShipCountry($_REQUEST['CUST_SHIP_COUNTRY']);
@$pg_transaction->setCustShipZip($_REQUEST['CUST_SHIP_ZIP']);
@$pg_transaction->setCustShipPhone($_REQUEST['CUST_SHIP_PHONE']);
@$pg_transaction->setCustShipName($_REQUEST['CUST_SHIP_NAME']);
?>
<?php require_once 'header-top.php'; ?>
<?php require_once 'header-bottom.php'; ?>


				
		<div class="contact-section" style="padding-top: 120px;">
        <!-- Container -->
        <div class="container">
            <!-- row -->
            <div class="row clearfix">
                <!-- col -->
                             
                <div class="col-lg-3 col-md-12 col-sm-12">&nbsp;</div>
				<div class="col-lg-6 col-md-12 col-sm-12 form-column"><center>
					
                    <div class="form-inner">
                        <h3>Pay Your Bill</h3>
                        <?php
// if form is submitted
if (isset($_REQUEST['payment_check'])) {
    $postdata = $pg_transaction->createTransactionRequest();
    $pg_transaction->redirectForm($postdata);
    exit();
} else {
    ?>
                        <form method="post" id="contact-form" class="default-form">
							<input type="hidden" name="payment_check" value="true">
							<input type="hidden" name="APP_ID" class="signuptextfield" value="<?php echo PG_APP_ID; ?>" autocomplete="off" />
							<input type="hidden" name="MERCHANTNAME" class="signuptextfield" value="Demo" autocomplete="off"/>
							<input type="hidden" name="ORDER_ID" class="signuptextfield" value="<?php echo 'avxID'.date('dmyHi')?>" autocomplete="off" />
							<!--input type="hidden" name="AMOUNT" class="signuptextfield" value="50"  autocomplete="off"/-->
							<input type="hidden" name="TXNTYPE" class="signuptextfield" value="SALE" autocomplete="off"/>
							<input type="hidden" name="CUST_NAME" class="signuptextfield" value="DEMO" autocomplete="off"/>
							<input type="hidden" name="CUST_STREET_ADDRESS1" class="signuptextfield" value="Gurgaon" autocomplete="off"/>
							<input type="hidden" name="CUST_ZIP" value="122016" class="signuptextfield" autocomplete="off"/>
							<input type="hidden" name="CUST_PHONE" value="9911889966" class="signuptextfield" autocomplete="off"/>
							<input type="hidden" name="CUST_EMAIL" class="signuptextfield" value="user@gmail.com" autocomplete="off"/>
							<input type="hidden" name="PRODUCT_DESC" class="signuptextfield" value="Demo Transaction" autocomplete="off"/>
							<input type="hidden" name="CURRENCY_CODE" class="signuptextfield" value="356"autocomplete="off" />
							<input type="hidden" name="RETURN_URL" class="signuptextfield" value="<?php echo PG_RESPONSE_URL; ?>" autocomplete="off" />
							<input type="hidden" name="SALT" class="signuptextfield" value="<?php echo PG_SALT; ?>" autocomplete="off" />
							
                            <div class="row clearfix">
                                
								<div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="biller" placeholder="Park Center Technopark" readonly>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="ID" placeholder="Car No - DL8C AC 4194" readonly>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
								    <input type="text" name="phone" placeholder="Your ID: PVS-54664554448" readonly>
                                </div>
								
								<div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="AMOUNT" value="50">
                                </div>
                                
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <!--<button class="btn theme-btn-1" type="submit" name="submit-form">Proceed</button>-->
									<!--button class="btn theme-btn-1" type="submit" name="submit-form">Pay Now</button-->
									<input type="submit" name="button" id="button" class="btn theme-btn-1 signupbutton" value="Pay Now" onclick="javascript:submitForm()"/>                     
                                </div>
                            </div>
                        </form>
                        <?php
}
?>
                    </div>
					</center>
                </div>
				<div class="col-lg-3 col-md-12 col-sm-12">&nbsp;</div>
                
            </div>
            <!-- /row -->
        </div>
		
		
            

<?php require_once 'footer-top.php'; ?>
<?php require_once 'footer-bottom.php'; ?>
