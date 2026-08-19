<?php require_once 'header-top.php'; ?>
<?php require_once 'header-bottom.php'; ?>


				
		<!-- Login -->
	<div class="login-page d-flex align-items-center vh-100">
		
		<div class="login-form">
			<!-- Container -->
			<div class="container">
				<form>
					<div class="login-social-icon">
						<h2>Login</h2>
						
					</div>
					
					<div class="input-group">
						<span class="login-form-icon"><i class="uil uil-user"></i></span>
						<input type="text" class="form-control" id="inputUsername" tabindex="1" placeholder="Username" required>
					</div>
					
					<div class="input-group">
						<span class="login-form-icon"><i class="uil uil-lock"></i></span>
						<input type="password" class="form-control" id="inputPassword" tabindex="2" placeholder="Password" required>
					</div>
	
					<div class="input-group">
						<div class="form-check">
							<input type="checkbox" class="form-check-input" id="rememberMe">
							<label class="form-check-label form-check-box" for="rememberMe">Keep me logged in</label>
						</div>
					</div>

					<div class="row justify-content-center mb-md-3">
						<div class="col-sm-6 mb-md-3 mb-sm-0">
							<button type="submit" class="btn theme-btn-1">Log In</button>
						</div>
						
						<div class="col-sm-6 text-sm-end">
							<a class="" href="recover.php">Forgot Password?</a>
						</div>
					</div>

					<div class="login-footer">Don't have an account? <a href="signup.php">Signup</a>
					</div>
				</form>
			</div>
			<!-- Container -->
		</div>
	</div>
	<!-- /login -->
		
		
            

<?php require_once 'footer-top.php'; ?>
<?php require_once 'footer-bottom.php'; ?>
