
import React from 'react'

const SideMenuBar = () => {
	return (
		<div class="sidebar menubar" data-color="black">
			<div class="logo"><a href="/" class="logo-mini">
				<div class="logo-img">
					<a href=''></a>
				</div>
				<div class="sidebar-wrapper ps ps--active-y">
					<div class="profile-info row">
						<div class="profile-image col-4">
							<a href="#!"><img alt="" src="/zestreact/appnew/images/profile/profile-blog.jpg" class="img-fluid avatar-image">
							</a>
						</div>
						<div class="profile-details col-8">
							<h3>
								<a href="#!">Alice Gross</a>
								<span class="profile-status online"></span>
							</h3><p class="profile-title">Editor</p>
						</div>
					</div><ul class="navigation nav">
						<li class=" nav-parent ">
							<a class="nav-link" href="/zestreact/appnew/blog/dashboard">
								<i class="i-speedometer"></i><p>Dashboard</p><span class="badge">
								</span></a>
						</li>
						<li class="blogs  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!">
							<i class="i-note"></i>
							<p>Blogs</p><span class="badge"></span><span class="arrow i-arrow-left"></span></a>
							<ul class="nav">
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/blogs"><span>Blogs</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/add-blog"><span>Add Blog</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/edit-blog"><span>Edit Blog</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/blog-view"><span>Blog View</span></a>
								</li>
							</ul>
						</li>
						<li class=" nav-parent "><a class="nav-link" href="/zestreact/appnew/blog/search">
							<i class="i-magnifier"></i><p>Search</p><span class="badge"></span></a></li>
						<li class="pages active nav-parent " data-toggle="collapse">
							<a to="#" class="nav-link" href="#!">
								<i class="i-notebook"></i>
								<p>Pages</p>
								<span class="badge"></span>
								<span class="arrow i-arrow-left"></span></a>
							<ul class="nav">
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/pages">
										<span>Pages</span>
									</a>
								</li>
								<li>
									<a aria-current="page" class="nav-link active" href="/zestreact/appnew/blog/add-page"><span>Add Page</span>
									</a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/edit-page"><span>Edit Page</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/page-view"><span>Page View</span></a>
								</li>
							</ul>
						</li>
						<li class="users  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!">
							<i class="i-user"></i><p>Users</p><span class="badge"></span><span class="arrow i-arrow-left"></span></a><ul class="nav"><li><a class="nav-link" href="/zestreact/appnew/blog/users"><span>Users</span></a>
							</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/add-user"><span>Add User</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/edit-user"><span>Edit User</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/user-profile"><span>User Profile</span></a>
								</li>
							</ul>
						</li>
						<li class="blogmedia  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!">
							<i class="i-picture"></i>
							<p>Media</p>
							<span class="badge"></span>
							<span class="arrow i-arrow-left"></span></a>
							<ul class="nav">
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/media">
										<span>Media</span>
									</a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/upload-media"><span>Upload Media</span></a></li>
							</ul>
						</li>
						<li class="reports  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!">
							<i class="i-pie-chart"></i>
							<p>Reports</p>
							<span class="badge"></span><span class="arrow i-arrow-left"></span></a>
							<ul class="nav">
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/reports-site"><span>Site</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/reports-visitors"><span>Visitors</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/reports-social"><span>Social</span></a></li></ul></li><li class="messages  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!"><i class="i-envelope"></i><p>Messages</p><span class="badge"></span><span class="arrow i-arrow-left"></span></a><ul class="nav">
										<li>
											<a class="nav-link" href="/zestreact/appnew/blog/mail-inbox">
												<span>Inbox</span></a></li>
										<li>
											<a class="nav-link" href="/zestreact/appnew/blog/mail-compose">
												<span>Compose</span></a></li>
										<li>
											<a class="nav-link" href="/zestreact/appnew/blog/mail-view">
												<span>View</span>
											</a>
										</li>
									</ul>
						</li>
						<li class="categories  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!"><i class="i-folder-alt"></i>
							<p>Categories</p><span class="badge">
							</span>
							<span class="arrow i-arrow-left">
							</span>
						</a>
							<ul class="nav">
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/category"><span>Categories</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/add-category"><span>Add Category</span></a>
								</li>
								<li><a class="nav-link" href="/zestreact/appnew/blog/edit-category"><span>Edit Category</span></a>
								</li>
							</ul>
						</li>
						<li class="tags  nav-parent " data-toggle="collapse"><a to="#" class="nav-link" href="#!"><i class="i-tag"></i>
							<p>Tags</p>
							<span class="badge"></span>
							<span class="arrow i-arrow-left"></span>
						</a>
							<ul class="nav"><li><a class="nav-link" href="/zestreact/appnew/blog/tag"><span>Tags</span></a>
							</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/add-tag"><span>Add Tag</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/edit-tag"><span>Edit Tag</span></a>
								</li>
							</ul>
						</li>
						<li class="multipurpose  nav-parent " data-toggle="collapse">
							<a to="#" class="nav-link" href="#!">
								<i class="i-layers"></i><p>Multi Purpose</p>
								<span class="badge"></span>
								<span class="arrow i-arrow-left"></span>
							</a>
							<ul class="nav"><li><a class="nav-link" href="/zestreact/appnew/dashboard"><span>General</span></a>
							</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/hospital/dashboard"><span>Hospital</span></a>
								</li>
								<li><a class="nav-link" href="/zestreact/appnew/music/dashboard"><span>Music</span></a>
								</li><li><a class="nav-link" href="/zestreact/appnew/crm/dashboard"><span>CRM</span></a>
								</li>
								<li><a class="nav-link" href="/zestreact/appnew/social/dashboard"><span>Social Media</span></a>
								</li>
								<li><a class="nav-link" href="/zestreact/appnew/freelance/dashboard"><span>Freelance</span></a>
								</li>
								<li><a class="nav-link" href="/zestreact/appnew/university/dashboard"><span>University</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/ecommerce/dashboard"><span>Ecommerce</span></a>
								</li>
								<li>
									<a class="nav-link" href="/zestreact/appnew/blog/dashboard"><span>Blog</span></a></li>
							</ul>
						</li>
					</ul>
					<div class="ps__rail-x" style="left: 0px; bottom: 0px;">
						<div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;">
						</div>
					</div>
					<div class="ps__rail-y" style="top: 0px; height: 267px; right: 3px;">
						<div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 90px;">

						</div>
					</div>
				</div>
			</div>
			)
}
			export default SideMenuBar