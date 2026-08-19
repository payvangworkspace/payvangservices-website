<?php require_once 'header-top.php'; ?>
<?php require_once 'header-bottom.php'; ?>

<!-- home-secvice-section -->
        <div class="why-choose-us-area pt-150">
			<div class="container">
            <!-- row -->
            <div class="row justify-content-center text-center">
			<div class="col-12">
			<div class="section-title">
				<h2 class="title">Parking Payment Solution  </h2>
				<div class="title-bdr">
					<div class="left-bdr"></div>
					<div class="right-bdr"></div>
				</div>
				<p>Parking fees can be paid without cash using Payvang Services. </p>
			</div>
			</div>
			</div>
			</div>
		</div>
		
		<section class="pt-100 pb-70">
            <div class="container">
                
                    <div class="row">
						<div class="col-md-6">
							<h5>Benefits of Paying Parking Fees through Payvang Services</h5>
							<p>The various benefits of paying parking fees through Payvang Services are:</p>
							<ul>
								<li> - No need for you to carry any cash for the purpose of parking.</li>
								<li> - No need for standing in the queues in order to pay for the parking of your vehicle. With Payvang Services, the amount will be deducted automatically from your bank account.</li>
								<li> - When you pay with Payvang Services, you don't need to obtain the parking gate receipt.</li>
							</ul>
                        </div>
                        
                        
                        <div class="col-md-6">
							<div class="form-inner">
                        <h3>Pay Parking Fees</h3>
                        <form method="post" action="paynow3.php" id="contact-form" class="default-form">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group ">
                                    <select name="consult" id="consultancy">
									  <option value="">Select Parking Center</option>
									  <option value="Online Consultancy" selected>Park Center Technopark</option>
									  <option value="Offline Consultancy">Elante Mall</option>
									  <option value="Offline Consultancy">Select City Walk Mall</option>
									  
									</select>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="aid" placeholder="Car Number *" value="DL8CAC4194" readonly>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="phone" placeholder="Your Phone *" value="9911889966" readonly>
                                </div>
                                <!--<div class="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <input type="text" name="amount" placeholder="Amount *" required="">
                                </div>-->
                                
                                <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button class="btn theme-btn-1" type="submit" name="submit-form">Fetch Bill</button>
									<!--<button onclick="window.location.href='https://www.payvangservices.com/paynow3.php';" class="btn theme-btn-1" type="submit" name="submit-form">Proceed</button>
									<a href="paynow3.php" class="btn theme-btn-1">Fetch Bill</a>-->
                                </div>
                            </div>
                        </form>
                    </div>
                        </div>
                        
                    </div>
                
            </div>
        </section>
		
		
            

<?php require_once 'footer-top.php'; ?>


<?php require_once 'footer-bottom.php'; ?>
