import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 xl:px24 py-10  text-base-content p-10">
                <aside>
                    <img src="./logo.png" alt="" className='rounded-[20px] cursor-pointer w-[95px] h-[60px]' />
                    <p className='my-5 md:w-40'>
                        GoFood
                        <br />
                        Providing reliable tech and food since 2024
                    </p>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by GoFood Ltd</p>
                    </aside>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    )
}

export default Footer
