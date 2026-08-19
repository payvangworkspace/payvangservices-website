<?php require_once 'header-top.php'; ?>
<?php require_once 'header-bottom.php'; ?>


	<!-- Login -->
	<div class="login-page d-flex align-items-center vh-100">
			
		<div class="login-form">
			<!-- Container -->
			<div class="container">
				<form>
					<div class="login-social-icon">
						<h2>Signup</h2>
						
					</div>
					
					<div class="input-group">
						<span class="login-form-icon"><i class="uil uil-user"></i></span>
						<input type="text" class="form-control" id="inputUsername" tabindex="1" placeholder="Username" required>
					</div>
					
					<div class="input-group">
						<span class="login-form-icon"><i class="uil uil-envelope"></i></span>
						<input type="email" class="form-control" id="inputEmail" tabindex="2" placeholder="Email" required>
					</div>

					<div class="input-group">
						<span class="login-form-icon"><i class="uil uil-lock"></i></span>
						<input type="password" class="form-control" id="inputPassword" tabindex="3" placeholder="Password" required>
					</div>
	
					<div class="input-group">
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="rememberMe">
							<label class="form-check-label form-check-box" for="rememberMe">I agree to the <a class="" href="#">Terms & Conditions</a></label>
						</div>
					</div>

					<div class="row justify-content-center mb-md-3">
						<div class="col-sm-6 mb-md-3 mb-sm-0">
							<button type="submit" class="btn theme-btn-1">Sign Up</button>
						</div>
					</div>

					<div class="login-footer">Already have an account? <a href="login.php">Login</a></div>
				</form>
			</div>
			<!-- /Container -->
		</div>
	</div>
	<!-- /Login -->
		
		
            

<?php require_once 'footer-top.php'; ?>
<?php require_once 'footer-bottom.php'; ?>
