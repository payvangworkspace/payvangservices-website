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
                        <h3>Biller Details</h3>
                        <form method="post" action="#" id="contact-form" class="default-form">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group ">
                                    <select name="consult" id="consultancy">
									  <option value="Online Consultancy" selected>BSES Rajdhani</option>
									  <option value="Offline Consultancy">BSES Yamuna Power Limited</option>
									  <option value="Offline Consultancy">Petrol/Diesel</option>
									  <option value="Offline Consultancy">Cable</option>
									  <option value="Offline Consultancy">Water Bills</option>
									  <option value="Offline Consultancy">Broadband</option>
									</select>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="ID" placeholder="Consumer Number *">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
								    
                                    <input type="text" name="phone" placeholder="Your ID: PVS-54664554448" readonly>
                                </div>
                                
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <!--<button class="btn theme-btn-1" type="submit" name="submit-form">Proceed</button>-->
									<button onclick="window.location.href='paynow.php';" class="btn theme-btn-1" type="submit" name="submit-form">Fetch Bill</button>
                                </div>
                            </div>
                        </form>
                    </div>
					</center>
                </div>
				<div class="col-lg-3 col-md-12 col-sm-12">&nbsp;</div>
                
            </div>
            <!-- /row -->
        </div>
		
		
            

<?php require_once 'footer-top.php'; ?>
<?php require_once 'footer-bottom.php'; ?>
