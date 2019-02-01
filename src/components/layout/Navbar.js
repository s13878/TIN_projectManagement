import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignedInLinks'
import SignOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'



const Navbar = (props) => {
	const { close, open, auth, profile } = props;
	// console.log(auth);
	const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
	return (
		<div>
			<nav className="nav-wrapper grey darken-3">
				<div className="container">
					<button href="#" data-target="mobile-demo" className="sidenav-trigger btn-flat" onClick={open}><i className="material-icons icon-white">menu</i></button>
					<Link to='/' className="brand-logo">MarioPlan</Link>
					<div id='topNav'>
						{ links }
					</div>
				</div>
			</nav>
			<div className='mobile mobile__menu' onClick={close}>
				{links}
			</div>
		</div>
	)
}



const mapStateToProps = (state) => {
	// console.log(state)
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile,
		open: ()=>{
			var mobileNav = document.querySelector('.mobile');
			mobileNav.classList.add('open');
		},
		close: (e)=>{
			e.target.classList.remove('open');
		}
	}
}

export default connect(mapStateToProps)(Navbar)