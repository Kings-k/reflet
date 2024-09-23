<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title><?php $view['slots']->output('title', 'Reflet'); ?></title>
    <!-- MDB icon -->
    <link rel="icon" href="/assets/img/mdb-favicon.ico" type="image/x-icon" />
    <!-- Font Awesome -->
    <link rel="stylesheet" href="/assets/fontawesome/css/all.css" />
    <!-- Google Fonts Roboto -->
    <link rel="stylesheet" href="/assets/styles/fonts.css" />
    <!-- MDB -->
    <link rel="stylesheet" href="/public/build/app.css" />
    <!-- Custom styles -->
    <style>
		@media (min-width: 768px) {
			html {
				scroll-behavior: smooth;
			}
			main,
			header,
			#main-navbar {
				padding-left: 240px;
			}
			main {
				margin-top: 58px;
				min-height: calc(100vh - 58px);
			}
			.bg-grey {
				background-color: grey;
				color: #000;
			}
			.card {
				border: 2px solid #bbb !important;
				border-radius: 10px !important;
				padding: 2px;
			}
			.btn {
				border: 1px solid rgb(34, 95, 95) !important;
			}
			.error-message {
				font-size: smaller;
			}
			#spinner {
				position: absolute !important;
				z-index: 10000;
				background-color: rgba(0, 0, 0, .5);
				width: 100vw !important;
				height: 100vh !important;
			}
			#spinner > .spinner-border {
				width: 5rem;
				height: 5rem;
				left: 50vw;
				right: 50vw;
				top: 40vh;
				bottom: 60vh;
			}
		}
    </style>
	<?= $view['slots']->output('stylesheets') ?>
</head>

<body style="background-color: #eee;">
	<div class="d-flex justify-content-center">
		<div id="spinner" class="position-relative vw-100 vh-100" hidden>
			<div class="spinner-border text-light position-absolute" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>

		<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
			<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
				<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
			</symbol>
			<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
			</symbol>
			<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
				<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
			</symbol>
		</svg>

		<?php foreach ($app->getFlashes() as $type => $messages) : ?>
			<div class="d-flex flex-column align-items-center w-50">
				<?php foreach ($messages as $message) : ?>
					<div class="d-flex justify-content-center" style="top: 10px; z-index: 1200; box-shadow: 0 5px 5px 2px rgba(0, 0, 0, .3); border-radius: 5px;">
						<div class="alert alert-<?= $type ?> alert-dismissible fade show d-flex align-items-center" style="margin: 0;" role="alert">
							<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="<?= ucfirst($type) ?>:"><use xlink:href="#<?= $type === 'success' ? 'check-circle-fill' : ($type === 'info' ? 'info-fill' : 'exclamation-triangle-fill') ?>"/></svg>
							<div class="ml-3 mr-5"><?= $message ?></div>
							<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>
						</div>
					</div>
				<?php endforeach ?>
			</div>
		<?php endforeach ?>

		<div id="jsAlert" class="d-flex justify-content-center position-absolute" style="z-index: 1200; top: 10px;" hidden></div>
	</div>
    <!--Main Navigation-->
    <header>
      <!-- Sidenav -->
	  <?= $view->render('sidenav.html.php') ?>
      <!-- Sidenav -->

      <!-- Navbar -->
	  <?= $view->render('navbar.html.php') ?>
      <!-- Navbar -->
    </header>
    <!--Main Navigation-->

    <!--Main layout-->
    <main>
		<div style="height: 100%">
			<div class="container">
				<!-- [ breadcrumb ] start -->
				<div class="row align-items-center">
					<div class="col-md-12">
						<div class="d-flex justify-content-between mt-4">
							<div class="page-header-title">
								<h1 class="h2 m-b-"><?= $title ?></h1>
							</div>
							<?php if ($view['slots']->has('action_path')) : ?>
								<div class="col-md-4">
									<a href="<?= $view['slots']->output('action_path') ?>" class="btn btn-sm btn-primary float-right mr-0"><i class="fa fa-<?= $view['slots']->has('action_icon') ? $view['slots']->output('action_icon') : 'plus-circle' ?> mr-2"></i><?= $view['slots']->output('action_text') ?></a>
								</div>
							<?php endif ?>
						</div>
						<ul class="breadcrumb">
							<?php if (isset($breadcrumb)) : ?>
								<li class="breadcrumb-item"><a href="/dashboard"><i class="fas fa-home"></i></a></li>
								<?php foreach ($breadcrumb as $item) : ?>
								<li class="breadcrumb-item">
									<?php if (key_exists('path', $item)) : ?>
										<a href="<?= $item['path'] ?>"><?= $item['name'] ?></a>
									<?php else : ?>
										<span class="text-secondary"><?= $item['name'] ?></span>
									<?php endif ?>
								</li>
								<?php endforeach ?>
							<?php endif ?>
						</ul>
					</div>
				</div>
				<!-- [ breadcrumb ] end -->
				<!-- [ Main Content ] start -->
				<?php $view['slots']->output('_content') ?>
				<!-- [ Main Content ] end -->
			</div>
		</div>
    </main>
    <!--Main layout-->

    <!--Footer-->
    <footer></footer>
    <!--Footer-->

    <!-- MDB -->
    <script type="text/javascript" src="/assets/mdb/js/mdb.min.js"></script>
    <script type="text/javascript" src="/assets/jquery.js"></script>
    <script type="text/javascript" src="/assets/jQuery.print.js"></script>

    <!-- Custom scripts -->
	<script type="text/javascript" src="/assets/globals.js"></script>
    <script type="text/javascript">
		const user = <?= json_encode($app->getUser()->getFullName() ? $app->getUser()->getFullName() : $app->getUser()->getUsername()) ?>;
		const sidenav = document.getElementById("orka-sidenav");
		const instance = mdb.Sidenav.getInstance(sidenav);
		const firstSidenavCollapseElement = document.querySelector('.sidenav-item > .ripple-surface-primary:first-child');
		let innerWidth = null;

		const setMode = (e) => {
			// Check necessary for Android devices
			if (window.innerWidth === innerWidth) {
				return;
			}

			innerWidth = window.innerWidth;

			if (window.innerWidth < 768) {
				instance.changeMode("over");
				instance.hide();
			} else {
				instance.changeMode("side");
				instance.show();
			}
		};

		setMode();
		firstSidenavCollapseElement.click();
		setTimeout(() => {
			firstSidenavCollapseElement.click();
		}, 1000);
		// Event listeners
		window.addEventListener("resize", setMode);
    </script>
	<script type="application/javascript" src="/assets/print.js"></script>
	<script type="text/javascript" src="/assets/toast.js"></script>
	<?= $view['slots']->output('javascripts') ?>
</body>
</html>
